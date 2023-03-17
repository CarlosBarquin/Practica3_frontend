import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type planetProps = {
  name: string;
  residents: string[];
};



const Planet = () => {
  const [planet, setPlanet] = useState<planetProps>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const fetchData = async () => {
     
      const response = await fetch(
        `https://swapi.dev/api/planets/${id}`
      );
      const data = await response.json();
      const data2 = {
        ...data,
        residents: await Promise.all(
          data.residents.map(async (r: string) => {
            const residentResponse = await fetch(r);
            return await residentResponse.json();
          })
        ),
      };
      setPlanet(data2);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>{planet?.name}</h1>
      <h2>residents</h2>
      {planet?.residents.map((resident: any, index: number) => {
        return (
          <p key={index}>
            {resident.name}
            <br />
          </p>
        );
      })}
      <Link href="/planets/1"> volver </Link>
    </>
  );
};

export default Planet;
