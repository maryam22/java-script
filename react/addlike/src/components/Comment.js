import React from 'react'
import {Stack} from 'react-bootstrap'

function Comment() {
    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col-2">
                        <img src="https://i.imgur.com/xELPaag.jpg" width="70" className="rounded-circle mt-2" />
                    </div>
                    <div className="col-10">
                        <div className="comment-box ml-2">
                            <h4>Add a comment</h4>
                            <div className="rating"> <input type="radio" name="rating" value="5" id="5" /><label for="5" >☆</label> <input type="radio" name="rating" value="4" id="4" /><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3" /><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2" /><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label> </div>
                            <div className="comment-area"><p>“I've got my mom's old phone, but I can't afford a pricey wireless plan.
                               </p></div>
                               <div>
                                   <Stack direction="horizontal" gap={1}>
                                       <button className="btn btn-success btn-sm text-center" >like</button>
                                       <button className="btn btn-success send btn-sm">dislike</button>
                                   </Stack>
                               </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment

