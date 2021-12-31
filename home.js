const layout = require('./view/admin/layout');
const { getName } =require('./view/helpers')


module.exports = () => {
    return layout({
        homeNav:`
        <div class="d-flex">
            <!--upper section--><!--username-->
            <div><span>${getName()}</span></div>
            <div> 
                <a href="/signout"><button type="button" class="btn btn-danger "><span class="">signout</span></button></a>
            </div>
        </div>
        `,
        content:`
            <div class="d-flex p-3">
                <div class="d-inline-flex flex-grow-1 justify-content-start">
                    <input   class="border border-warning rounded " style="width:350px;" placeholder="Search">
                </div>
                <div class="d-inline-flex justify-content-end">
                    <button type="button" class=" btn btn-primary">create Note</button>
                </div>
            </div>


    <div class="container">
        <div class="row row-col-3">
                <div class="col-3 d-flex flex-grow-1 justify-content-center">
                    1-6
                </div>
                <div class="col-3 d-flex  flex-grow-1 justify-content-center">
                    2-6
                </div>
                <div class="col-3 d-flex flex-grow-1 justify-content-center">
                    3-6
                </div>
            </div>
        <div class="row row-col-3">
                <div class="col-3 d-flex flex-grow-1 justify-content-center">
                    4-6
                </div>
                <div class="col-3 d-flex flex-grow-1 justify-content-center">
                    5-6
                </div>
                <div class="col-3 d-flex flex-grow-1 justify-content-center">
                    6-9
                </div>
        </div>
    </div>
    `});
};