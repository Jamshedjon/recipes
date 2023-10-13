import { useFetch } from "../hooks/useFetch";
import TaomlarList from "../components/TaomlarList";
import { URL } from "../API";

function ChetelTaomlari() {
    const { data: taomlar, isPanding, error } = useFetch(URL + "recipes");
    return (
        <div>{taomlar && <TaomlarList taomlar={taomlar} tur={"chet"} />}</div>
    );
}

export default ChetelTaomlari;
