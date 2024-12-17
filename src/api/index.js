const getNames = async (formData) => {
    const data = await fetch('https://avada-seo-staging-8.firebaseapp.com/proxy/chat', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        }
      });
    return data.json()
}

export default getNames;