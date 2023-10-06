
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

/* google api fn */

var map = L.map('map').setView([20.5937,78.9629],5);

        L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=ZpCiKIxdMgMkY5SH1cZX', {
            attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }).addTo(map);


        var staicon = L.icon ({
            iconUrl: 'https://w7.pngwing.com/pngs/522/1011/png-transparent-world-water-day-food-magodo-street-water-scarcity-water-food-service-logo.png',
            iconSize: [25,25],
            iconAnchor: [22,94],
            popupAnchor: [0,-20]
        })

        var marker = L.marker([26.9124,75.7873],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Jaipur </h3><p>Causes:Limited Water Sources: Reliance on limited water sources like the Bisalpur Dam. Population Growth: Increased demand for water due to urbanization.Inefficient Water Management: Leakage and wastage in the distribution network.Solutions:Diversify Water Sources: Explore and develop alternative water sources to reduce dependence on a single reservoir. Water Recycling: Implement systems for recycling wastewater and reusing it for non-potable purposes.Leakage Reduction: Invest in infrastructure improvements to minimize water leakage in the distribution system.</p>");
        
        var marker = L.marker([22.7196,75.8577],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Indore </h3><p>Causes: Excessive Groundwater Extraction: Over-pumping of groundwater for agriculture and domestic use. Wastewater Mismanagement: Inadequate wastewater treatment and disposal.Urban Growth: Increased demand for water due to urbanization.   Solutions: Groundwater Regulation: Enforce regulations on groundwater extraction and promote water-efficient agricultural practices. Wastewater Treatment: Improve wastewater treatment infrastructure to recycle and reuse treated water.Public Awareness: Educate the public about water conservation and responsible water use.</p>");
        
        var marker = L.marker([19.2183,72.9781],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3>  Thane </h3><p>Causes: Deforestation: Loss of green cover can disrupt local water cycles and reduce water availability. Urbanization: Rapid urban development often leads to increased water demand and pollution. Inefficient Agricultural Practices: Inefficient irrigation methods and excessive water use in agriculture.Solutions: Reforestation: Implement afforestation and reforestation programs to restore local ecosystems and recharge groundwater.Urban Planning: Sustainable urban planning that includes rainwater harvesting and wastewater treatment.Water-Efficient Farming: Promote efficient irrigation techniques and educate farmers on water conservation.</p>");
        
        var marker = L.marker([22.3072,73.1812],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3>  Vadodara </h3><p>Causes: Over-Extraction of Groundwater: Excessive pumping of groundwater for agriculture and industry has led to declining water tables.Industrial Pollution: Contamination of water sources due to industrial activities.Population Growth: Increased demand for water due to urbanization and population expansion. Solutions:Groundwater Management: Implement regulations on groundwater extraction and encourage efficient irrigation practices.Industrial Regulations: Enforce stricter pollution control measures on industries to prevent water contamination.Water Recycling: Promote the recycling and reuse of industrial wastewater to reduce freshwater demand.</p>");
        
        var marker = L.marker([34.0837,74.7973],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Srinagar</h3><p>Causes:  Climate Change: Changes in precipitation patterns, including reduced snowfall in the Himalayas, affect the availability of freshwater. Conflict Over Water Resources: Political tensions and disputes over shared water resources contribute to water scarcity. Inefficient Water Management: Wasteful water practices and outdated infrastructure exacerbate the problem. Solutions: Rainwater Harvesting: Promote rainwater harvesting systems to capture and store precipitation for domestic and agricultural use. Improved Infrastructure: Upgrade water storage and distribution systems to reduce leakage and water Conflict Resolution: Diplomatic efforts to resolve water-related disputes with neighboring regions or countries.</p>");
        
        var marker = L.marker([22.5726,88.3639],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Kolkata </h3><p> - *Challenge:* Rising sea levels in the Bay of Bengal pose a significant threat to Kolkata's water bodies. This includes the risk of saltwater intrusion into the Hooghly River and groundwater aquifers, which can contaminate drinking water sources and harm agricultural lands.- *Solution:* Implement sustainable water management practices, such as rainwater harvesting and groundwater recharge systems, to reduce dependence on surface water sources. Develop sea defenses to mitigate saltwater intrusion and promote climate-resilient agriculture techniques.</P>");

        var marker = L.marker([23.0225,72.5714],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Ahmedabad </h3><p>- *Challenge:* Ahmedabad faces water scarcity issues due to irregular monsoon patterns, compounded by climate change. Reduced water flow in the Sabarmati River and increased evaporation rates further strain water resources.- *Solution:* Invest in efficient water infrastructure, such as reducing water losses during distribution. Enforce water-use regulations for industries, and develop alternative water sources like treated wastewater and desalination plants.</p>");
        
        var marker = L.marker([23.1686,79.9339],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Jabalpur </h3><p>- *Challenge:* Jabalpur experiences challenges related to floods, riverbank erosion, and water quality issues in the Narmada River and its tributaries. - *Solution:* Implement flood control measures and riverbank stabilization projects. Promote afforestation and reforestation efforts in the catchment area and enhance water quality monitoring and treatment facilities.</p>");
        
        var marker = L.marker([19.0760, 72.8777],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Mumbai  </h3><p>- *Challenge:* Mumbai is highly vulnerable to sea level rise, leading to coastal flooding during monsoons. The city's drainage systems are overwhelmed, causing waterlogging and contamination.- *Solution:* Invest in comprehensive flood mitigation and drainage systems. Implement land-use planning to prevent construction in flood-prone areas and promote sustainable construction and green infrastructure.</p>");
        
        var marker = L.marker([26.8467,80.9462],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> lucknow </h3><p>- *Challenge:* Lucknow relies heavily on the Gomti River for water supply, but changing monsoon patterns and extended dry spells impact water availability.- *Solution:* Enhance water storage infrastructure for rainwater harvesting. Develop drought-resistant crop varieties, promote efficient irrigation techniques, and strengthen groundwater monitoring and management.</p>");
        
        var marker = L.marker([31.3260,75.5762],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Jalandhar  </h3><p>- *Challenge:* Jalandhar faces groundwater depletion and changing precipitation patterns, impacting the water table and agricultural practices.- *Solution:* Promote sustainable agriculture to reduce groundwater extraction. Implement rainwater harvesting and educate farmers on water-saving irrigation methods and crop rotation.</p>");
        
        var marker = L.marker([18.5204,73.8567],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Pune </h3><p>- *Challenge:* Pune experiences water stress and fluctuating reservoir levels due to erratic rainfall patterns.- *Solution:* Enforce water-use regulations and pricing mechanisms. Develop additional reservoirs and wastewater treatment facilities. Promote wastewater treatment and reuse.</p>");

        var marker = L.marker([23.7957,86.4304],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Dhanbad </h3><p>- *Challenge:* Dhanbad faces water pollution issues from nearby coal mining, which can worsen with climate-induced changes in rainfall patterns. - *Solution:* Enforce strict environmental regulations on coal mining, invest in water treatment facilities, and promote sustainable mining practices.</p>");

        var marker = L.marker([23.2599, 77.4126],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Bhopal </h3><p>- *Challenge:* Bhopal faces water pollution issues, particularly in the Upper Lake and the Betwa River, with the potential to worsen due to reduced river flows.- *Solution:* Enforce regulations on industrial discharge, invest in wastewater treatment, and restore natural buffer zones around water bodies to improve water quality.</p>");

        var marker = L.marker([ 26.2124, 78.1772],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3>Gwalior</h3><p>- *Challenge:* Gwalior experiences water stress, with climate-induced shifts in precipitation patterns affecting river flow and water availability - *Solution:* Implement water conservation measures, manage river flows, and invest in watershed management and afforestation projects to maintain river health and water availability.</p>");

        var marker = L.marker([19.7515,75.7139],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3>Maharashtra</h3><p>- *Challenge:* Maharashtra faces water scarcity issues, with erratic rainfall patterns and increased temperatures affecting water availability in cities like Mumbai and Pune.- *Solution:* Implement sustainable water management practices, encourage rainwater harvesting, and develop additional water storage infrastructure. Promote water-efficient agriculture and industries to reduce water stress.</p>");

        var marker = L.marker([22.6708,71.5724],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Gujarat </h3><p>- *Challenge:* Gujarat faces water scarcity and increasing salinity in coastal regions due to climate change. This affects the availability of freshwater for agriculture and urban areas.- *Solution:* Enhance water management through efficient irrigation techniques and desalination projects. Invest in sustainable agriculture practices and promote awareness about water conservation among industries and communities.</p>");

        var marker = L.marker([ 15.3173,75.7139],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Karnataka </h3><p>- *Challenge:* Karnataka experiences water stress, particularly in Bengaluru, due to declining groundwater levels and irregular monsoons.- *Solution:* Implement groundwater recharge projects, enforce water-use regulations, and invest in wastewater treatment and reuse. Promote green building practices in urban areas to conserve water.</p>");

        var marker = L.marker([23.6913, 85.2722],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3>Jharkhand</h3><p>- *Challenge:* Jharkhand faces water pollution issues and the potential for increased flooding and erosion in some regions due to climate change. - *Solution:* Strengthen environmental regulations to control pollution, develop flood control measures, and enhance disaster preparedness and response strategies.</p>");
        var marker = L.marker([15.9129, 79.7400],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Andhra Pradesh </h3><p>- *Challenge:* Andhra Pradesh is vulnerable to sea-level rise, which can lead to coastal flooding and saline intrusion, affecting water resources.- *Solution:* Implement coastal protection measures, enhance freshwater storage capacity, and promote climate-resilient agriculture practices to adapt to changing conditions.</p>");
        var marker = L.marker([27.0238,74.2179],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Rajasthan </h3><p>- *Challenge:* Rajasthan faces extreme heat and water scarcity issues, with climate change intensifying desertification and reducing water availability.- *Solution:* Promote water-efficient agriculture, develop rainwater harvesting systems, and implement drought-resilient crop varieties. Invest in solar energy to power water desalination projects in arid regions</p>");
        var marker = L.marker([27.5706,80.0982],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3>Uttar Pradesh </h3><p>- *Challenge:* Uttar Pradesh experiences water stress, with fluctuating monsoons and pollution affecting the quality of water bodies.- *Solution:* Improve water quality monitoring and treatment facilities. Promote sustainable agriculture and enforce stricter regulations on industrial discharge into water bodies.</p>");
        var marker = L.marker([12.9716,77.5946],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Bengaluru </h3><p>- *Challenge:* Bengaluru faces water scarcity and groundwater depletion issues, exacerbated by urbanization and changing rainfall patterns. - *Solution:* Enforce rainwater harvesting in urban areas, upgrade water supply infrastructure, and invest in wastewater treatment and reuse. Encourage sustainable development practices.</p>");

        var marker = L.marker([13.0827,80.2707],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> Chennai </h3><p>*Challenge:* Chennai is prone to water shortages and coastal erosion due to climate change, which can affect freshwater availability.Solution: Develop additional water storage facilities, implement desalination projects, and enhance coastal protection measures. Promote water conservation and efficient use in urban areas.</P>");

        var marker = L.marker([28.7041,77.1025],{icon: staicon}).addTo(map);
        marker.bindPopup("<h3> delhi </h3><p>- *Challenge:* Delhi faces water pollution, air pollution, and increasing temperatures due to climate change.- *Solution:* Strengthen environmental regulations to control pollution, improve public transportation to reduce air pollution, and implement energy-efficient practices to mitigate urban heat island effects. Enhance wastewater treatment and reuse systems.</p>");


        
        
        navigator.geolocation.watchPosition(sucess,error);

        

        
        //setInterval(train,5000)

        function sucess(pos){

            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const accuracy = pos.coords.accuracy;

            L.marker([lat,lng]).addTo(map);  //,{icon:staicon}
            L.circle([lat,lng],{radius: accuracy}).addTo(map);

            map.fitBounds(circle.getBounds());
        }

        function error(err){
            if(err.code === 1){
                alert('Please allow geolocation access');
            }else{
                alert("Cannot get current location")
            }
        }