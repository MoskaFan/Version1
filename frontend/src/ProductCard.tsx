import {ProductData} from "./ProductData";


type ProductCardProps = {
    product: ProductData | undefined
}
export default function ProductCard (props: ProductCardProps) {


    return (
        <section className={"section"}>
            Food name: {props.product!.food_name} <br/>
            Brand name: {props.product!.brand_name} <br/>
            serving_qty: {props.product!.serving_qty} <br/>
            serving_unit: {props.product!.serving_qty}<br/>
            serving_weight_grams: {props.product!.serving_weight_grams}<br/>
            Calories: {props.product!.nf_calories}<br/>
            Total fat: {props.product!.nf_total_fat}<br/>
            Saturated fat: {props.product!.nf_saturated_fat}<br/>
            Cholesterol: {props.product!.nf_cholesterol}<br/>
            Sodium: {props.product!.nf_sodium}<br/>
            Total carbohydrate: {props.product!.nf_total_carbohydrate}<br/>
            Dietary fiber: {props.product!.nf_dietary_fiber}<br/>
            Sugars: {props.product!.nf_sugars}<br/>
            Protein: {props.product!.nf_protein}<br/>
            Potassium: {props.product!.nf_potassium}<br/>
            Phosphorus: {props.product!.nf_p}<br/>
            photo: {props.product!.photo}<br/>
        </section>
    );
}