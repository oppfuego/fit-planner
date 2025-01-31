import React, { useEffect, useState } from 'react';
import { db } from '../../FirebaseConfig';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './Subscription.scss';
import { SubscriptionModel } from "./SubscriptionModel";
import Rollback from '../rollback/Rollback';
import Dumbbells from '../../assets/dumbbells.jpg';
import { FaCheck } from "react-icons/fa";

const Subscription = () => {
    const [subscriptions, setSubscriptions] = useState<SubscriptionModel[]>([]);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const getSubscription = async () => {
            const subscriptionCollection = collection(db, "Subscription");
            const subscriptionSnapshot = await getDocs(subscriptionCollection);

            const subscriptionList = subscriptionSnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            })) as SubscriptionModel[];

            setSubscriptions(subscriptionList);
        };
        getSubscription();
    }, []);

    const handleBuy = async (subscriptionId: string) => {
        if (!currentUser) {
            console.log("User not logged in");
            return;
        }

        try {
            const userRef = doc(db, "Users", currentUser.uid);
            await updateDoc(userRef, { subscriptionId });
            console.log(`Subscription ${subscriptionId} saved for user ${currentUser.uid}`);
            navigate('/info-user-page');
        } catch (error) {
            console.error("Error updating user subscription:", error);
        }
    };

    return (
        <div className="subscriptions">
            <Rollback />
            <h1 className="title">Subscriptions</h1>
            <div className="subscriptions__content-container">
                {subscriptions.map((subscription, index) => (
                    <div key={index} className="subscriptions__sub-item">
                        <img src={Dumbbells} alt="dumbells" className="subscriptions__image" />
                        <h1 className="title">{subscription.name}</h1>
                        <ul className="subscriptions__benefits">
                            {subscription.benefits.map((benefit, idx) => (
                                <li key={idx} className="subscriptions__list">
                                    <FaCheck className="subscriptions__icon" />
                                    {idx === 1 && `${subscription.workoutsPerWeek} `}
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <p className="subscriptions__price">{subscription.price}.00$</p>
                        <button className="btn" onClick={() => handleBuy(subscription.id)}>
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subscription;