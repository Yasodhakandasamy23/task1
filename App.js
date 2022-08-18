
import './App.css';

function App() {


let frame=[{
offer:"FREE",
rate:"$0/Month",
users:"Single User",
storage:"5GB Storage",
access:"Community Access",
project:"Unlimited Public Projects",
phonesupport:"Dedicated Phone Support",
subdomain:"Free Subdomain",
report:"Monthly Status Reports"
},
{
offer:"plus",
rate:"$9/month",
users:"5 Users",
storage:"50GB Storage",
access:"Community Access",
project:"Unlimited Public Projects",
phonesupport:"Dedicated Phone Support",
subdomain:"Free Subdomain",
report:"Monthly Status Reports"
},
{
offer:"PRO",
rate:"$49/month",
users:"Unlimited Users",
storage:"150GB Storage",
access:"Community Access",
project:"Unlimited Public Projects",
phonesupport:"Dedicated Phone Support",
subdomain:"Free Subdomain",
report:"Monthly Status Reports"
}


]
  return (
   
  <div className='container' >
     {

    frame.map((user)=>( 
      <Msg offer={user.offer} rate={user.rate}users={user.users}storage={user.storage}access={user.access}project={user.project}
      phonesupport={user.phonesupport}subdomain={user.subdomain}report={user.report}/>
      ))
    }
      </div>
      
  );
   
  }
  function Msg({offer,rate,users,storage,access,project,phonesupport,subdomain,report})
  {
return(
    
      <div className='page'>
        <p className='paragraph-heading'>{offer}</p>
    <p className='paragraph'>{rate}</p>
    <p>&#10004;{users}</p>
   <p>&#10004;{storage}</p> 
    <p>&#10004;{access}</p>
    <p>&#10004;{project}</p>
    <p>&#10060;{phonesupport}</p>
    <p>&#10060;{subdomain}</p>
    <p> &#10060;{report}</p>   

    <button className='button'>Button</button>
    </div> 
   
    
    
    
)

}

 

export default App;
