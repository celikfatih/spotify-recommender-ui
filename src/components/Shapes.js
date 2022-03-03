import { Grid, ResponsiveContext, Text } from "grommet";
import React, { useContext } from "react";
import Star from "../components/Star";
import Hexagon from "../components/Hexagon";
import Minus from "../components/Minus";
import Parallelogram from "../components/Parallelogram";
import Pentagon from "../components/Pentagon";
import Plus from "../components/Plus";
import Rhombus from "../components/Rhombus";
import Trepeze from "../components/Trapeze";
import Triangle from "../components/Triangle";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Shapes = ({ type, shapes, isLoading, error, handleClick }) => {
    const size = useContext(ResponsiveContext);

    const retrieveComponent = (shape) => {
        switch (shape.component) {
            case 'Star':
                return <Star key={shape.id} handleClick={() => handleClick(type, shape)} color={shape.color} />
            case 'Hexagon':
                return <Hexagon key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
            case 'Minus':
                return <Minus key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
            case 'Parallelogram':
                return <Parallelogram key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
            case 'Pentagon':
                return <Pentagon key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
            case 'Plus':
                return <Plus key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
            case 'Rhombus':
                return <Rhombus key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
            case 'Trepeze':
                return <Trepeze key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
            case 'Triangle':
                return <Triangle key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
            default:
                return <Triangle key={shape.id} onClick={() => handleClick(type, shape)} color={shape.color} />
        }
    }

    return (
        <>
            {(isLoading) && <Loading />}
            {(Array.isArray(shapes) && shapes.length) ? <Grid
                align="center"
                rows={['xsmall', 'small'].includes(size) ? ['xsmall'] : ['small']}
                columns={{ count: 3, size: 'auto' }}
                gap={['xsmall', 'small'].includes(size) ? 'medium' : 'xlarge'}
            >
                {shapes.map(s => retrieveComponent(s))}
            </Grid> : <Text />
            }
            {(error && !isLoading) && <Error message={error} />}
        </>
    )
};

export default Shapes;