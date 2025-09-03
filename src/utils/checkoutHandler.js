export const checkoutHandler = async () => {
    const data = [
        {
            id: "regreso-a-clases-2025",
            cantidad: 1,
            precio: 999,
            curso: "Regreso a Clases 2025"
        }
    ]
    
    const resp = await fetch("https://fyrloiscom.vercel.app/api/checkoutPromo", {
    method: "POST",
    body: JSON.stringify({data, promCode:false}),
    headers: {
      "Content-Type": "application/json",
    },
  })
  console.log(resp);
  

  if (resp) {
    const response = await resp.json()

    window.location.href = response.data.url
  } else {
    console.log("Error al enviar los datos")
  }
    
}