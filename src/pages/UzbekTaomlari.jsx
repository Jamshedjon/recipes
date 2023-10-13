import { useFetch } from "../hooks/useFetch";
import TaomlarList from "../components/TaomlarList";
import { URL } from "../API";

function UzbekTaomlari() {
    const {
        data: taomlar,
        isPanding,
        error,
        postNewDate,
    } = useFetch(URL + "uzbek_taomlari");

    return (
        <div>{taomlar && <TaomlarList taomlar={taomlar} tur={"uzb"} />}</div>
    );
}

export default UzbekTaomlari;
