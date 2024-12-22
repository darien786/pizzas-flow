import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import PropTypes from "prop-types";

export default function CardCombo({ image, image2,title, price }){

    return(
        <div className="flex flex-wrap gap-1 mb-6 justify-center ">
            <Card isPressable shadow="lg" onPress={() => console.log("click")}>
                <CardBody className="overflow-visible bg-orange-400 space-x-2 grid grid-cols-2 p-2">
                    <Image src={image} height={220} width={250} shadow="sm" isBlurred />
                    <Image src={image2} height={220} width={250} shadow="sm" isBlurred />
                </CardBody>
                <CardFooter className="text-small justify-between bg-orange-400 grid grid-cols-1">
                    <b className="text-2xl font-quicksand">{title}</b>
                    <p className="text-3xl">$ {price}</p>
                </CardFooter>
            </Card>           
        </div>
    )
}

CardCombo.propTypes = {
    image: PropTypes.object,
    image2: PropTypes.object,
    title: PropTypes.string,
    price: PropTypes.number
}