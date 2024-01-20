export {default} from "./Home";

export async function getServerSideProps(context){
    console.log(context);
    return {
       props:{
        pagination:null,
       }
    }
}