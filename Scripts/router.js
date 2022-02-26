(function(core){

    class Router
    {
        get ActiveLink()
        {
            return this.m_activeLink;
        }

        set ActiveLink(link)
        {
            this.m_activeLink = link;
        }

        /**
         * Method creates an instance of Router.
         * 
         * @constructor
         */
        constructor()
        {
            this.ActiveLink = "";
        }

        /**
         * Method adds a new route to the Routing table
         *
         * @param {string} route
         */
        Add(route)
        {
            this.m_routingTable.push(route);
        }

        /**
         * Method replaces the current routing table with a new one
         * Routes should begin with '/' character
         * 
         * @param {string[]} routingTable
         */
        AddTable(routingTable)
        {
            this.m_routingTable = routingTable;
        }

        /**
         * Method finds the index of the route in the routing table
         * otherwise it returns -1 if the route is not found
         *
         * @param {string} route
         * @returns {number}
         */
        Find(route)
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * Method removes a route from the Routing Table
         * It returns true if the route was successfully removed,
         * otherwise it returns false
         *
         * @param {string} route
         * @returns {boolean}
         */
        Remove(route)
        {
            if(this.Find(route) > -1)
            {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        /**
         * Method overrides the built-in toString method and returns the entire routing table as a string
         * 
         * @override
         * @returns {string}
         */
        toString()
        {
            return this.m_routingTable.toString();
        }
    }

    core.Router = Router;

})(core || (core = {}));

let router = new core.Router();
router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/projects",
    "/register",
    "/login",
    "/edit"
]);

let route = location.pathname; // alias for location.pathname

if(router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else
{
    router.ActiveLink = "404"; // file not found
}