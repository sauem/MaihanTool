import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home";

const ContentRouter = (props: any) => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}
export default ContentRouter;
