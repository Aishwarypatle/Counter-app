import React from "react";
import { useState } from "react";



const Counter =  () =>
{

    let [count , setCount ] = useState(0);

   


    return (
        <>
            <div className="bg-dark d-flex justify-content-center align-items-center vh-100 vw-100">

                <div className="card bg-dark p-5 text-light d-flex justify-content-center align-items-center border border-primary backg  ">
                        <h3 className="card-title mb-4 border-bottom ">Counter App</h3>

                        <div className="d-grid justify-content-center align-items-center">
                            
                            <div className="d-flex justify-content-center align-items-center">
                                <p className="d-block text-align-center fw-bold fs-1"> {count}</p>
                            </div>

                            <div className='d-flex justify-content-center align-items-center'>

                                <button className="m-2 btn btn-success" onClick={()=>{setCount(count+1)}} >Increment</button>{''}
                                <button className="m-2 btn btn-danger" onClick={()=>setCount(count-1)} >Decrement</button>{''}
                            </div>
                            <button className="m-2 mt-0 btn btn-warning" onClick={()=>{setCount(count===0)}} variant="s">Reset</button>{''}

                        </div>
                </div>

            </div>
        </>
    )
}

export default Counter 


