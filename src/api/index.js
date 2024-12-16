const getNames = async (formDatat) => {
    return fetch('https://avada-seo.firebaseapp.com/lighthouse/audit?shopId=xRv0XIbwqeIY3md5EIIv&url=https%3A%2F%2Fnam-seo-dev-local4-store.myshopify.com&passwordStore=1&device=desktop&uploadResult=true&throttling=dense4G');
}

export default getNames;