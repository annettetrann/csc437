import "./views/index-view";
import "./views/tours-view";
import "./views/profile-view";
import "./views/tour-view";
import "./views/setlist-view";


export default [
    {
        path: "/",
        component: "index-page"
    },
    {
        path: "/tours/",
        component: "tours-page"
    },
    {
        path: "/profile/",
        component: "profile-page"
    },
    {
        path: "/tour/",
        component: "tour-page"
    },
    {
        path: "/setlist/",
        component: "setlist-page"
    },
    { 
        path: "(.*)", 
        redirect: "/" 
    },

//   {
//     path: "/app/profile/:userid",
//     component: "profile-page"
//   },
//   {
//     path: "/app/:tour([0-9a-f]+)/destination/:dest([0-9]+)",
//     component: "destination-page"
//   },
//   {
//     path: "/app/:tour([0-9a-f]+)/entourage",
//     component: "entourage-page"
//   },
//   { path: "/app/:tour([0-9a-f]+)", component: "tour-page" },
//   { path: "/app", component: "tour-page" },

];