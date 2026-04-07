export interface FAQ {
  q: string;
  a: string;
}
export interface ServiceDetail {
  slug: string;
  title: string;
  heroImage: string;
  shortDesc: string;
  longContent: string[];
  localKeywords: string[];
  problemsList: string[];
  processSteps: string[];
  pricingTeaser: string;
  faqs: FAQ[];
}
export const SERVICE_DATA: Record<string, ServiceDetail> = {
  "emergency-plumbing": {
    slug: "emergency-plumbing",
    title: "24/7 Emergency Plumber Mississauga",
    heroImage: "https://images.unsplash.com/photo-1504148455328-497c5efdf156?auto=format&fit=crop&q=80&w=2000",
    shortDesc: "Immediate dispatch for floods, burst pipes, and sewage backups across Peel Region.",
    localKeywords: ["City Centre", "Lorne Park", "Mineola", "Sheridan", "Rathwood"],
    problemsList: ["Burst Water Mains", "Severe Sewage Backups", "Flooding Basements", "No Water Supply"],
    processSteps: ["Rapid Dispatch (Under 25 Mins)", "Immediate Source Shutoff", "Damage Assessment", "Precision Repair"],
    pricingTeaser: "Emergency Dispatch from $129",
    longContent: [
      "When a plumbing crisis strikes in Mississauga, every second counts. Whether you're dealing with a midnight pipe burst in Port Credit or a severe drain backup in Erin Mills, our emergency response team is strategically positioned to reach your doorstep in record time. We understand the unique architectural challenges of Mississauga homes, from the vintage plumbing systems in Streetsville to the modern high-rises near Square One.",
      "Our Master Plumbers are equipped with state-of-the-art diagnostic tools to identify the root cause of your emergency instantly. We don't just patch the problem; we provide long-term solutions that adhere strictly to the Ontario Plumbing Code. Water damage can escalate into costly mold issues within hours, which is why our 24/7 hotline is manned by local dispatchers who know the Mississauga transit routes and neighborhoods perfectly to ensure the fastest possible arrival.",
      "We take pride in our transparent pricing model, even during high-stress emergency situations. You'll receive a flat-rate quote before any work begins, ensuring no surprises when the job is done. Our commitment to the Mississauga community is backed by a lifetime warranty on labor, giving you peace of mind when you need it most."
    ],
    faqs: [
      { q: "How fast is your emergency response in Mississauga?", a: "We guarantee a technician on-site within 25-30 minutes for all priority emergency calls in the Mississauga area." },
      { q: "Do you charge extra for holidays or weekends?", a: "We provide upfront flat-rate pricing. While emergency dispatch fees apply, we maintain transparency without hidden 'surprise' holiday surges." },
      { q: "Can you handle high-rise condo emergencies near Square One?", a: "Yes, our team is certified to work on high-pressure commercial and residential high-rise systems common in the Mississauga City Centre." },
      { q: "What should I do while waiting for the plumber?", a: "Locate your main water shut-off valve and turn it clockwise. If it's an electrical hazard due to flooding, avoid the area and wait for our professional arrival." },
      { q: "Are your plumbers licensed for Peel Region?", a: "Absolutely. All our technicians are Red Seal Certified and fully insured to operate across Mississauga and the GTA." }
    ]
  },
  "drain-cleaning": {
    slug: "drain-cleaning",
    title: "Professional Drain Cleaning Mississauga",
    heroImage: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=2000",
    shortDesc: "Advanced hydro-jetting and CCTV inspections for permanent clog removal.",
    localKeywords: ["Cooksville", "Lakeview", "Applewood", "Dixie", "Meadowvale"],
    problemsList: ["Slow Drains", "Recurring Clogs", "Root Intrusion", "Kitchen Grease Buildup"],
    processSteps: ["HD Camera Inspection", "Localized Snaking", "High-Pressure Hydro-Jetting", "Flow Verification"],
    pricingTeaser: "Drain Snaking from $99",
    longContent: [
      "Stubborn clogs in Mississauga can be more than just a nuisance; they often signal deeper issues like root infiltration or pipe scale buildup. Our Mississauga drain cleaning services utilize industrial-grade hydro-jetting technology that clears drains to a 'like-new' condition. Unlike chemical cleaners that can corrode your pipes, our water-based precision cleaning is safe for all pipe materials, including the clay tiles often found in older Mississauga neighborhoods.",
      "We begin every major drain service with a high-definition CCTV camera inspection. This allows us to see exactly what's causing the blockage—whether it's hair, grease, or invasive tree roots from your Mississauga backyard. By identifying the exact location and nature of the clog, we save you time and money on unnecessary repairs.",
      "Our team is well-versed in the local soil conditions of Peel Region, which can contribute to shifting pipes and frequent blockages. We provide comprehensive maintenance plans for Mississauga homeowners to prevent messy backups before they happen, ensuring your home's waste system operates flawlessly year-round."
    ],
    faqs: [
      { q: "Is hydro-jetting safe for old clay pipes?", a: "We always perform a camera inspection first. If the pipe is structurally sound, hydro-jetting is the safest way to clear it without abrasive chemicals." },
      { q: "How often should I have my drains cleaned?", a: "For most Mississauga residential properties, a professional cleaning every 2 years is recommended to prevent major backups." },
      { q: "Why are my drains gurgling?", a: "Gurgling usually indicates a venting issue or a partial blockage deep in the main line. Our diagnostic tools can pinpoint the exact cause quickly." },
      { q: "Do you offer a warranty on drain cleaning?", a: "Yes, we provide a 30-day clear-flow guarantee on all standard drain cleaning services." },
      { q: "Can roots really grow into my pipes?", a: "Yes, tree roots in Mississauga are attracted to the moisture in pipes. Our hydro-jetting system is specifically designed to cut through and remove these roots." }
    ]
  },
  "pipe-repair": {
    slug: "pipe-repair",
    title: "Pipe Repair & Leak Detection",
    heroImage: "https://images.unsplash.com/photo-1585704032915-c3400ca1f965?auto=format&fit=crop&q=80&w=2000",
    shortDesc: "Trenchless repairs and acoustic leak detection for residential water lines.",
    localKeywords: ["Creditview", "East Credit", "Fairview", "Hurontario", "Lisgar"],
    problemsList: ["Pin-hole Leaks", "Noisy Pipes", "High Water Bills", "Visible Corrosion"],
    processSteps: ["Acoustic Mapping", "Pressure Testing", "Localized Repair", "Full System Flush"],
    pricingTeaser: "Leak Detection from $149",
    longContent: [
      "A small leak in your Mississauga home can lead to thousands of dollars in structural damage if left unchecked. Our advanced acoustic leak detection equipment can find hidden pin-hole leaks behind walls or under concrete slabs without invasive digging. This technology is essential for Mississauga homeowners who want to preserve their property's integrity while fixing plumbing issues.",
      "We specialize in both copper and PEX piping systems. If your home was built in the 70s or 80s in areas like Meadowvale, you might still have outdated polybutylene pipes which are prone to sudden failure. We offer full repiping services that upgrade your home to modern, durable PEX-A systems, increasing your property value and reliability.",
      "Our pipe repair solutions are designed for longevity. We use premium fittings and follow the highest standards of soldering and joining techniques. Every repair is pressure tested to ensure it can handle the municipal water pressure fluctuations common in the Peel Region water distribution network."
    ],
    faqs: [
      { q: "What are the signs of a hidden water leak?", a: "Sudden drops in water pressure, damp spots on walls, or an unexplained increase in your Mississauga water bill are key indicators." },
      { q: "Do you offer trenchless pipe repair?", a: "Yes, for main line issues, we utilize trenchless technology to minimize damage to your landscaping and driveway." },
      { q: "Why do my pipes make a banging noise?", a: "This is likely 'water hammer.' We can install water hammer arrestors to protect your plumbing from pressure spikes." },
      { q: "How long does a typical pipe repair take?", a: "Most minor leaks can be repaired within 2-4 hours. Full repiping projects are usually completed in 2-3 days." },
      { q: "Is PEX better than copper?", a: "PEX is more resistant to freeze-damage and scaling, making it an excellent choice for the Mississauga climate, though copper remains the gold standard for durability." }
    ]
  },
  "toilet-services": {
    slug: "toilet-services",
    title: "Toilet Repair & Installation Mississauga",
    heroImage: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=2000",
    shortDesc: "Fixing leaks, clogs, and installing high-efficiency modern toilets.",
    localKeywords: ["Churchill Meadows", "Erindale", "Malton", "Streetsville", "Sheridan Park"],
    problemsList: ["Running Toilets", "Weak Flushes", "Base Leaks", "Rocking Units"],
    processSteps: ["Diagnostic Flush", "Component Replacement", "Wax Ring Inspection", "Performance Test"],
    pricingTeaser: "Toilet Repair from $89",
    longContent: [
      "A malfunctioning toilet is one of the most common plumbing headaches for Mississauga residents. Whether it's a constant 'phantom flush' or a dangerous leak at the base, our team provides rapid, effective repairs. We stock a wide variety of replacement parts for major brands like American Standard, Kohler, and TOTO, often completing repairs in a single visit.",
      "If you're looking to upgrade, we specialize in high-efficiency toilet (HET) installations. Modern toilets use significantly less water per flush, which is not only better for the environment but also reduces your monthly utilities in Mississauga. We ensure every new installation includes a premium wax ring and stainless steel supply lines for maximum leak protection.",
      "Our plumbers also handle complex bathroom renovations in Mississauga. We can relocate plumbing stacks and ensure your new bathroom layout meets all local building codes and accessibility requirements. From standard comfort-height models to advanced bidet systems, we bring 'the Pro standard' to every bathroom."
    ],
    faqs: [
      { q: "Why does my toilet keep running?", a: "Usually, a faulty flapper or fill valve is the culprit. This can waste hundreds of gallons of water per month if not fixed." },
      { q: "Can you fix a toilet that won't stop clogging?", a: "Frequent clogs often indicate an obstruction in the trapway or a venting issue. We can snake the line or use a closet auger to clear it." },
      { q: "Do you install toilets I purchased myself?", a: "Yes, we are happy to provide professional installation services for any fixtures you've already bought." },
      { q: "How do I know if my toilet is leaking at the base?", a: "Look for water pooling around the floor or a persistent sewer smell. This usually means the wax ring has failed." },
      { q: "What is a dual-flush toilet?", a: "It's a water-saving model that offers two flush options: one for liquid waste and a full flush for solids, common in newer Mississauga developments." }
    ]
  },
  "water-heaters": {
    slug: "water-heaters",
    title: "Water Heater Services Mississauga",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000",
    shortDesc: "Maintenance, repair, and installation of tank and tankless systems.",
    localKeywords: ["Meadowvale Village", "Rathwood", "Fairview", "Mississauga Valleys", "Lorne Park"],
    problemsList: ["No Hot Water", "Leaking Tanks", "Rusty Water", "Pilot Light Issues"],
    processSteps: ["Safety Inspection", "Sediment Flushing", "Element Testing", "Anode Rod Check"],
    pricingTeaser: "Water Heater Flush $129",
    longContent: [
      "Hot water is a necessity, especially during the harsh Mississauga winters. We provide comprehensive service for all types of water heaters, including conventional gas tanks, electric models, and high-efficiency tankless systems. If your water heater is over 10 years old, it may be nearing the end of its life—our team can help you choose the best replacement for your home's hot water demands.",
      "Maintenance is key to preventing catastrophic tank failures. We offer annual sediment flushing for Mississauga homeowners, which removes the calcium buildup common in local hard water. This service extends the life of your heater and keeps your energy bills low by ensuring maximum heat transfer efficiency.",
      "Thinking of switching to tankless? Tankless water heaters provide endless hot water and take up significantly less space. Our technicians are factory-trained in the installation and maintenance of Navien and Rinnai systems, ensuring your Mississauga home has a reliable, energy-efficient hot water supply for years to come."
    ],
    faqs: [
      { q: "Why is my water heater making a knocking sound?", a: "Sediment buildup at the bottom of the tank causes steam bubbles to pop, creating a knocking noise. A professional flush usually fixes this." },
      { q: "How long do water heaters typically last in Mississauga?", a: "Most tank models last 8-12 years. Tankless models can last up to 20 years with proper maintenance." },
      { q: "Can you repair my rental water heater?", a: "While we can diagnose issues, most rental units must be serviced by the rental provider. However, we can help you switch to an owned unit to save money." },
      { q: "What's the advantage of tankless?", a: "Endless hot water, higher energy efficiency, and a much smaller footprint are the primary benefits." },
      { q: "My water is rusty, what does that mean?", a: "It often means the sacrificial anode rod has been depleted and the tank itself is starting to corrode. This requires immediate attention." }
    ]
  },
  "sump-pumps": {
    slug: "sump-pumps",
    title: "Sump Pump & Basement Protection",
    heroImage: "https://images.unsplash.com/photo-1517646281553-9b935c703184?auto=format&fit=crop&q=80&w=2000",
    shortDesc: "Battery backup systems and pump maintenance for flood prevention.",
    localKeywords: ["Lakeview", "Port Credit", "Mineola", "Lorne Park Estates", "Clarkson"],
    problemsList: ["Pump Not Turning On", "Continuous Running", "Battery Failure", "Basement Dampness"],
    processSteps: ["Float Switch Test", "Pit Cleaning", "Check Valve Inspection", "Backup System Test"],
    pricingTeaser: "Pump Inspection from $99",
    longContent: [
      "For homes in low-lying areas of Mississauga or near the Lake Ontario shoreline, a reliable sump pump is the only thing standing between you and a flooded basement. Our Mississauga sump pump services include the installation of primary pumps and essential battery backup systems. Power outages often occur during heavy storms—the exact time you need your pump most—making a backup system a critical investment for your Peel Region home.",
      "We install high-capacity pumps capable of moving thousands of gallons of water per hour. Our team also inspects your discharge lines to ensure water is being moved safely away from your foundation, preventing the 're-pumping' cycle that can burn out motors prematurely.",
      "Basement flooding can lead to permanent damage and insurance nightmares. By choosing our professional sump pump services, you're getting 'the Pro standard' in flood prevention. We provide annual testing to ensure your float switch, check valve, and backup battery are all in perfect working order before the spring thaw or heavy autumn rains."
    ],
    faqs: [
      { q: "Do I really need a battery backup sump pump?", a: "Yes. Storms often cause power outages in Mississauga. Without a backup, your pump won't work when you need it most." },
      { q: "How long does a sump pump last?", a: "Typically 5-7 years. If your pump is older, it's safer to replace it before it fails during a storm." },
      { q: "Why is my sump pump running constantly?", a: "This could be a stuck float switch or a faulty check valve allowing water to flow back into the pit." },
      { q: "Can you install a water-powered backup pump?", a: "Yes, these are excellent alternatives if you have reliable municipal water pressure, as they don't depend on batteries." },
      { q: "Does a sump pump prevent all basement flooding?", a: "It handles groundwater. For sewage backups, you may also need a backwater valve installation." }
    ]
  },
  "frozen-pipes": {
    slug: "frozen-pipes",
    title: "Frozen Pipe Repair & Winter Care",
    heroImage: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=2000",
    shortDesc: "Safe thawing services and winterization for Mississauga winters.",
    localKeywords: ["Lisgar", "Meadowvale", "Churchill Meadows", "Malton", "Erindale"],
    problemsList: ["No Water in Winter", "Frost on Pipes", "Bulging Water Lines", "Outdoor Faucet Leaks"],
    processSteps: ["Risk Assessment", "Controlled Thawing", "Damage Inspection", "Insulation Upgrades"],
    pricingTeaser: "Winterization from $129",
    longContent: [
      "Mississauga winters can be brutal on your home's plumbing. When temperatures drop below freezing, water inside uninsulated pipes can expand and cause the pipe to burst. Our frozen pipe thawing service uses safe, controlled heat to restore water flow without the fire risks associated with blowtorches. If a pipe has already burst, our emergency team is ready to perform immediate repairs to minimize water damage.",
      "Prevention is the best strategy. We offer professional winterization services for Mississauga homeowners, which include draining outdoor lines, installing frost-free hose bibs, and adding high-R-value insulation to vulnerable pipes in crawlspaces or attics. These simple steps can save you from a major plumbing catastrophe during the next Peel Region deep freeze.",
      "If you've lost water pressure during a cold snap, don't wait for the pipe to burst. A frozen pipe is under immense pressure. Calling a professional early can often mean the difference between a simple thawing service and a major emergency repair. Our team knows the typical 'cold spots' in Mississauga home designs and can provide targeted insulation solutions to keep your water flowing all winter long."
    ],
    faqs: [
      { q: "What should I do if my pipes are frozen?", a: "Keep your faucets open, turn off the main water supply if possible, and call a professional. Never use an open flame to thaw pipes." },
      { q: "How can I prevent frozen pipes in Mississauga?", a: "Ensure all outdoor faucets are drained, insulate pipes in unheated areas, and keep your thermostat above 15°C even when away." },
      { q: "Can PEX pipes freeze and burst?", a: "PEX is more flexible than copper and can expand slightly, but it is still susceptible to bursting in extreme Mississauga cold." },
      { q: "Do you offer heat tape installation?", a: "Yes, we can professionally install heat cables on vulnerable pipes to provide active protection against freezing." },
      { q: "How long does it take to thaw a pipe?", a: "Depending on the location and length of the freeze, it typically takes 1-3 hours using professional equipment." }
    ]
  }
};