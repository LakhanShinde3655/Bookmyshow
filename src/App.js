import logo from './logo.svg';
import './App.css';
 const movielist=[ 



  {
    img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDQuNEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
    details:"Jailer",
    para:"Action/Drama/Thriller",
  },
  {
    img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTAwLjhLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-thncgdskxu-portrait.jpg",
    details:"King of Kotha",
    para:"Action/Drama/Thriller"
  },
  {
    img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA3SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-akxtqdbbwa-portrait.jpg",
    details:"DD Returns",
    para:"Action/Drama/Thriller"
  },
  {
    img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAyNy40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364543-gemyvvelyn-portrait.jpg",
    details:"Blue Beetle",
    para:"Action/Drama/Thriller"
  },
  {
    img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDIuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
    details:"Jailer",
    para:"Action/Drama/Thriller"
  }









 ]
function App() {
  return (
  
    <div style={{display:"flex", justifyContent:"space-evenly",marginLeft:"100px",marginRight:"100px",marginTop:"50px"}} className="App">

   
      {
        movielist.map((lakhan)=>{return(
<div>
    <img style={{width:"230px",borderRadius:"10px"}}src={lakhan.img} alt="" />
    <h3 style={{marginRight:"120px",marginTop:"10px"}}>{lakhan.details}</h3>
    <p style={{marginRight:"90px",marginTop:"2px"}}>{lakhan.para}</p>
   

   
</div>
        )}) 
      }
    </div>
  
  );
}

export default App;
