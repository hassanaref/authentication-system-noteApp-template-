const layout = require('./view/admin/layout')

module.exports = () => {
return layout({
content:`
        <div>
            <form method="GET">
                <div><input type="text" placeholder="subject"></div>
                <div>
                    <button type="submit">save</button>
                    <button type="reset">Clear</button>
                </div>
                <div><input type="text" placeholder="note"></div>
            </form>
        </div> `
});
};
