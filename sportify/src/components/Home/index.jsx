import React from 'react'
import Content from '../Content'
import { useParams } from "react-router-dom";

function Home() {
        let params = useParams();
        return (
            <>
                <Content id={params.id}/>
            </>
        )
    }

export default Home