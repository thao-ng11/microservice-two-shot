import { useEffect, useState } from 'react'



export default function ShoesList() {
    const [shoes, setShoes] = useState([])
    const fetchShoes = async () => {
        const url = 'http://localhost:8080/api/shoes/'
        const res = await fetch(url)
        const shoesDict = await res.json()
        console.log(shoesDict)
        setShoes(shoesDict.shoes)
    }

    useEffect(() => {
        fetchShoes()
    }, [])

    const handleDelete = async (id) => {
        await fetch(
          `http://localhost:8080/api/shoes/${id}`,
          {
            method: 'DELETE'
          },
        )
        setShoes(
            shoes.filter((shoe) => {
                return shoe.id !== id
            })
        )
      };
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model Name</th>
                    <th>Color</th>
                    <th>Bin</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {shoes.map(shoe => {
                    return (
                        <tr key={shoe.id}>
                            <td>{ shoe.manufacturer }</td>
                            <td>{ shoe.model_name }</td>
                            <td>{ shoe.color }</td>
                            <td>http://localhost:3000{ shoe.bin.import_href }</td>
                            <td>{ shoe.picture_url }</td>
                            <td><button onClick={ () => handleDelete(shoe.id)}>Delete?</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

