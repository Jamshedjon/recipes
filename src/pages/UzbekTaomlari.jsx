import { useFetch } from "../hooks/useFetch";
import TaomlarList from "../components/TaomlarList";

function UzbekTaomlari() {
    const {
        data: taomlar,
        isPanding,
        error,
    } = useFetch("http://localhost:3000/uzbek_taomlari");
    return (
        <div>{taomlar && <TaomlarList taomlar={taomlar} tur={"uzb"} />}</div>
    );
}

export default UzbekTaomlari;
