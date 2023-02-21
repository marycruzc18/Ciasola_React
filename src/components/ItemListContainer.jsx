import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams} from "react-router-dom";


const ItemListContainer = () => {
    const {category} = useParams();
    
    const getDatos = () =>{
        return new Promise((resolve,reject) =>{
            if(Data.length  === 0){
                reject(new error("no hay datos para mostrar"));
            }
            setTimeout(()=>{
                resolve(Data);
            }, 2000);
        });
    

    };

    async function fetchingData(){
        try{
            const datosFetched = await getDatos();

        }catch(err){
            console.log(err);
        }
    }

    fetchingData();

    if(category === undefined){
        return(
            <div> 
            <h1 className="text-center mt-2">Productos</h1>
            <ItemList productos={Data} />
            </div>
         );
        
    }else{
        const catFilter = Data.filter((producto) => producto.category === category);
    return(
     
        <section>
            <div>
             
                <h1 className="text-center mt-2">Productos por Categoría </h1>
                {catFilter ? <ItemList productos={catFilter} /> : <ItemList productos={Data} />}
                
            </div>
        </section>

    
    );

    }


    

};

export default ItemListContainer;