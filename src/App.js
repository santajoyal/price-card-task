import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './card';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function App() {
let carddetails = [
  {
    plan: "FREE",
    price: 0,
    features: [
      {
        name: "Single User",
        isEnabled: true
      },
      {
        name: "5GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: false
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: false
      },
      {
        name: "Free Subdomain",
        isEnabled: false
      },
      {
        name: "Monthly Status Reports",
        isEnabled: false
      }
    ]
  },
  {
    plan: "PLUS",
    price: 9,
    features: [
      {
        name: "5 Users",
        isEnabled: true
      },
      {
        name: "50GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled:true        },
      {
        name: "Free Subdomain",
        isEnabled:true        },
      {
        name: "Monthly Status Reports",
        isEnabled: false        }
    ]
  },
  {
    plan: "PRO",
    price: 49,
    features: [
      {
        name: "Unlimited Users",
        isEnabled: true
      },
      {
        name: "150GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: true
      },
      {
        name: "Free Subdomain",
        isEnabled: true
      },
      {
        name: "Monthly Status Reports",
        isEnabled: true
      }
    ]
  }
  
]
  return (
  <section className="pricing py-5">
    <div className="container">
      <div className="row">
         {
          carddetails.map((obj)=>{
           return <Card data={obj}></Card>
          })
         }
      </div>
    </div>
  </section>
  );
}

export default App;
