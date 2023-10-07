import { useFetch } from "../hooks/useFetch";
import TaomlarList from "../components/TaomlarList";

function ChetelTaomlari() {
    const {
        data: taomlar,
        isPanding,
        error,
    } = useFetch("http://localhost:3000/recipes");
    return (
        <div>{taomlar && <TaomlarList taomlar={taomlar} tur={"chet"} />}</div>
    );
}

export default ChetelTaomlari;
