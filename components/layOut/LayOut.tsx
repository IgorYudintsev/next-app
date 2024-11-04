import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";
import NavBar from "@/components/navBar/NavBar";

export const LayOut: NextPage<PropsWithChildren> = (props) => {
    const {children} = props
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};

export const getLayout=(page:ReactElement)=>{
    return <LayOut>{page}</LayOut>
}

//TODO: LayOut