import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const UseMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // //console.log(menu);

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-liart.vercel.app/menu')
    //     .then((res) => res.json())
    //     .then(data => {
    //         setMenu(data)
    //         setLoading(false);
    //     })
    // },[])

    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=> {
            const res = await fetch('https://bistro-boss-server-liart.vercel.app/menu');
            return res.json();
        }
    })
    return [menu, loading, refetch]
};

export default UseMenu;