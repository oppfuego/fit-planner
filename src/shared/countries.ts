export interface CountryOption {
    code: string;
    name: string;
}

const COUNTRY_CODES = [
    "AL", "AD", "AM", "AT", "AZ", "BE", "BA", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "GE",
    "DE", "GR", "HU", "IS", "IE", "IT", "KZ", "XK", "LV", "LI", "LT", "LU", "MT", "MD", "MC", "ME",
    "NL", "MK", "NO", "PL", "PT", "RO", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "TR", "UA", "GB",
    "VA", "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "SV", "GT", "HN", "MX", "NI", "PA", "PY",
    "PE", "UY", "CA", "US", "BZ", "AG", "BS", "BB", "DM", "GD", "GY", "JM", "KN", "LC", "VC", "SR",
    "TT", "AU", "NZ", "FJ", "PG", "SB", "VU", "WS", "TO", "FM", "MH", "PW", "NR", "KI", "TV", "BN",
    "KH", "CN", "HK", "IN", "ID", "JP", "JO", "KG", "LA", "LB", "MY", "MV", "MN", "NP", "OM", "PK",
    "PH", "QA", "SA", "SG", "KR", "LK", "TW", "TJ", "TH", "TL", "TM", "AE", "UZ", "VN", "BH", "BT",
    "IL", "KW", "PS", "MA", "DZ", "AO", "BJ", "BW", "BF", "BD", "BI", "CM", "CV", "TD", "KM", "CG",
    "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY",
    "MG", "MW", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW", "ST", "SN", "SC", "SL", "ZA", "TZ",
    "TG", "TN", "UG", "ZM", "ZW"
] as const;

const RESTRICTED_COUNTRY_CODES = new Set([
    "RU", "BY", "IR", "KP", "SY", "YE", "AF", "SD", "SS", "CU", "VE", "ZW", "MM", "ML", "CD", "CF",
    "SO", "IQ", "HT",
]);

const countryDisplayNames = new Intl.DisplayNames(["en"], { type: "region" });

function getCountryName(code: string): string {
    return countryDisplayNames.of(code) || code;
}

export const restrictedCountryCodes = Array.from(RESTRICTED_COUNTRY_CODES);

export const allowedCountries: CountryOption[] = COUNTRY_CODES
    .filter((code, index, array) => array.indexOf(code) === index)
    .filter((code) => !RESTRICTED_COUNTRY_CODES.has(code))
    .map((code) => ({ code, name: getCountryName(code) }))
    .sort((a, b) => a.name.localeCompare(b.name));

export const allowedCountryCodes = new Set(allowedCountries.map((country) => country.code));

export function isAllowedCountryCode(countryCode: string): boolean {
    return allowedCountryCodes.has(countryCode.toUpperCase());
}

export function getCountryLabel(countryCode?: string | null): string | null {
    if (!countryCode) return null;
    const normalized = countryCode.toUpperCase();
    return getCountryName(normalized);
}
