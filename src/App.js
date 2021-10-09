import Header from './components/Header';
import './App.css';
import Accesories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoofs from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item';



function App() {
  return (
    <div className="App">
      
      <Header/>
      <div className="app_itemsContainer">
        <Item
         Title='Lowest Cost solar panels in America'
         Desc='Order Online for TouchLess Delivery'
         DescLink=''
         backgroundImg={SolarPanels}
         leftBtnTxt='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnTxt='EXISTING INVENTORY'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         Title='Model S'
         Desc='Order Online forTouchless Delivery'
         DescLink=''
         backgroundImg={ModelS}
         leftBtnTxt='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnTxt='EXISTING INVENTORY'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         Title='Model 3'
         Desc='Order Online forTouchless Delivery'
         DescLink=''
         backgroundImg={Model3}
         leftBtnTxt='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnTxt='EXISTING INVENTORY'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         Title='Model X'
         Desc='Order Online for TouchLess Delivery'
         DescLink=''
         backgroundImg={ModelX}
         leftBtnTxt='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnTxt='EXISTING INVENTORY'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         Title='Model Y'
         Desc='Order Online for TouchLess Delivery'
         DescLink=''
         backgroundImg={ModelY}
         leftBtnTxt='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnTxt='EXISTING INVENTORY'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         Title='Solar Roofs'
         Desc='Order Online for TouchLess Delivery'
         DescLink=''
         backgroundImg={SolarRoofs}
         leftBtnTxt='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnTxt='EXISTING INVENTORY'
         rightBtnLink=''
         twoButtons='true'
         first
        />
        <Item
         Title='Accessories'
         Desc='Order Online for TouchLess Delivery'
         DescLink=''
         backgroundImg={Accesories}
         leftBtnTxt='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnTxt='EXISTING INVENTORY'
         rightBtnLink=''
         twoButtons='true'
         first
        />
      </div>
    </div>
  );
}

export default App;
