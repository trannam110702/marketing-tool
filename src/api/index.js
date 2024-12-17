const getNames = async (formData) => {
    const data = await fetch('http://localhost:3000/proxy/chat', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        }
      });
    return data.json()
}

export default getNames;