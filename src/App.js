
import CardComponent from './components/CardComponent';
import './index.css';

function App() {
    return (
      <div className="app">
        <CardComponent
          image="https://i5.walmartimages.com/seo/Apple-iPhone-X-64GB-Unlocked-GSM-Phone-w-Dual-12MP-Camera-Space-Gray-B-Grade-Used_15c2b968-bb85-41a4-9292-b017f78fe797.a66ebbf32b6d53b6d6eb14c47434ac04.jpeg"
          bookmarked={true}
          deviceName="Phone"
        />

        <CardComponent
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcxS94imOU4JNNXwR147H-xxuR2Us7jRxcN8K4RMVnjT6BqAw9eFJyTUKXMKODapcLoVQRNv4qP8YTYnguCh38qFAah6JxWcBKkLUD54E&usqp=CAc"
          bookmarked={false}
          deviceName="Laptop"
        />

        <CardComponent
          image="https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg"
          bookmarked={true}
          deviceName="Watch"
        />

        <CardComponent
          image="https://car-images.bauersecure.com/wp-images/3651/480x0/santafesuv_200.jpg.webp?scale=down"
          bookmarked={false}
          deviceName="SUV"
        />

        <CardComponent
          image="https://cdn.businessday.ng/wp-content/uploads/2024/02/Kawasaki-Ninja-ZX-14R.jpg"
          bookmarked={true}
          deviceName="Power Bike"
        />

        <CardComponent
          image="https://i5.walmartimages.com/seo/Kent-Sparkles-Bicycle-18-Wheels-Child-Ages-6-Black-and-Pink_5e86a104-4ada-48b1-97f6-da7454fec662.f0b72e94626b8430a01d105a2d3b53cf.jpeg"
          bookmarked={false}
          deviceName="Bicycle"
        />

        <CardComponent
          image="https://www.volvotrucks.ph/content/dam/volvo-trucks/markets/master/p2764/trucks/landing/trucks-landing-our-range.png"
          bookmarked={true}
          deviceName="Truck"
        />

        <CardComponent
          image="https://www.astarlimousineqa.com/wp-content/uploads/2025/02/luxury-bus.png.webp"
          bookmarked={false}
          deviceName="Luxury Bus"
        />

        <CardComponent
          image="https://i.ytimg.com/vi/uCqFmOz1xt8/maxresdefault.jpg"
          bookmarked={true}
          deviceName="Aircraft A350 neo"
        />
      </div>
    );
}

export default App