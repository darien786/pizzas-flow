import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import PropTypes from "prop-types"

export default function CardProduct({ image, title, price, height, width }) {

    return(
        <div className="flex flex-wrap gap-1 mb-6 justify-center">
            <Card isPressable shadow="lg" onPress={() => console.log("click")}>
                <CardBody className="overflow-visible p-0 bg-orange-400 p-2">
                    <Image src={image} height={height} width={width} shadow="sm" isBlurred />
                </CardBody>
                <CardFooter className="text-small justify-between bg-orange-400">
                    <b className="text-2xl font-quicksand">{title}</b>
                    <p className="text-3xl">$ {price}</p>
                </CardFooter>            
            </Card>
        </div>        
    )
}

CardProduct.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    price: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number
}