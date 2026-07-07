/* ==========================================================================
   PORTFOLIO INTERACTIVE DATASET
   ========================================================================== */
const projectData = {
    p1: {
        title: "Water Genesis – Smart Desalination System",
        subtitle: "B.Tech DIPEX State Level Winner Project",
        desc: "Water Genesis is an IoT-enabled portable thermal desalination and purification system designed to convert saline water or seawater into safe drinking water. Developed as a compact, automated alternative to large-scale plants, it employs a Multi-Effect Distillation (MED) inspired thermal process controlled electronically without human intervention.<br><br>Key innovations include a 10-meter copper helical condensation coil for high heat exchange, thermoelectric Peltier cooling to accelerate condensation, a 3-stage purification process (Sediment, Pre-Carbon, and Mineral Alkaline filter to restore calcium/magnesium), and a touchless PIR motion sensor dispensing mechanism. The system features a distributed control architecture utilizing an Arduino Mega 2560, Arduino Nano, and 8-channel relay unit. Vitals and monitoring statistics (TDS, temperature, tank level) are displayed in real-time on a 2.4-inch TFT HMI dashboard.",
        tech: ["Arduino Mega 2560", "Arduino Nano", "Peltier module", "TDS Sensor", "K-Type Thermocouple", "PIR Motion Sensor", "Solenoid Valve", "TFT HMI", "Embedded C"],
        images: [
            "assets/images/page_2_img_0.png",
            "assets/images/page_2_img_1.png",
            "assets/images/page_74_img_0.png"
        ]
    },
    p2: {
        title: "Low Cost Modular Industrial IoT Node",
        subtitle: "1st Rank Mini Project Exhibition",
        desc: "A custom 2-layer industrial IoT development board designed to safely acquire sensor telemetry and interface with heavy machinery in noisy industrial environments. The node is powered by an ATmega2560 microcontroller and features full hardware isolation to protect the MCU from high-voltage transients.<br><br>Sensing interfaces include 0–10V analog inputs, 4–20mA current loop transmitters (interfaced via a high-precision ADS1115 16-bit ADC), and digital status inputs isolated with optocouplers. Outputs consist of relay and solenoid drivers with flyback diode protection. Communication interfaces feature RS485 Modbus RTU (MAX3485), Bluetooth Low Energy (HM-10) for local smartphone setup, Wi-Fi (ATWINC1500) for cloud telemetry, and RS232 (MAX3232). It includes local data logging onto an SD card, a DS1307 RTC with battery backup, TVS protection, reverse polarity protection, and a buck converter power section.",
        tech: ["ATmega2560", "ADS1115", "EagleCAD", "RS485 Modbus RTU", "ATWINC1500 Wi-Fi", "HM-10 BLE", "SD Data Logger", "DS1307 RTC", "Embedded C"],
        images: [
            "assets/images/page_28_img_1.png",
            "assets/images/page_28_img_0.png",
            "assets/images/page_75_img_0.png"
        ]
    },
    p3: {
        title: "FPGA-Based Digital Arithmetic Processor",
        subtitle: "VHDL Logic Implementation",
        desc: "A real-time digital arithmetic processor implemented completely inside the hardware fabric of an Artix-7 FPGA using VHDL combinational and sequential logic. The system operates entirely without a soft-core or hard-core microprocessor, demonstrating a deep understanding of hardware description languages and FPGA architecture.<br><br>The processor accepts two 4-bit binary numbers input via the FPGA board's DIP switches and performs high-speed addition inside the FPGA fabric. A custom Binary-to-BCD (Binary Coded Decimal) conversion engine parses the 5-bit sum into tens and ones decimal digits. A custom VHDL LCD controller initializes and drives a 16x2 character LCD to display the inputs and decimal results dynamically in real-time. In addition, the system integrates a VHDL UART transmitter module that outputs the serial packet to a PC terminal for remote logging.",
        tech: ["VHDL", "Artix-7 FPGA", "Xilinx Vivado", "16x2 LCD Interfacing", "UART Transmitter", "BCD Conversion Engine", "Digital Logic Design"],
        images: [
            "assets/images/page_15_img_0.png"
        ]
    },
    p4: {
        title: "Ultrasonic Distance Measurement (No MCU)",
        subtitle: "Best Hardware Design Award",
        desc: "An entirely hardware-based ultrasonic distance measurement instrument engineered without using any microcontroller or software programming, demonstrating absolute mastery of analog timing, Time-of-Flight (ToF) principles, and discrete digital logic circuits.<br><br>The system functions by utilizing a dual NE555 timer circuit: one configured as an astable multivibrator to generate periodic trigger pulses for the HC-SR04 ultrasonic sensor, and the second configured to process the return echo pulse width. The echo width gates a pulse-train clock signal. The gated clock pulses are fed into a cascade of three CD40110BE decade counter / 7-segment display driver ICs (representing units, tens, and hundreds). The distance value appears directly on three common-anode 7-segment displays. Features discrete BC547 transistor signal conditioning stages and L7805 linear voltage regulation.",
        tech: ["NE555 Timers", "CD40110 Counters", "HC-SR04 Sensor", "BC547 NPN", "L7805 Regulator", "Discrete Logic", "Schematic Design"],
        images: [
            "assets/images/page_22_img_0.png",
            "assets/images/page_21_img_1.png",
            "assets/images/page_21_img_0.png",
            "assets/images/page_74_img_1.png"
        ]
    },
    p5: {
        title: "Transistor-Based H-Bridge Motor Controller",
        subtitle: "Discrete Circuit Design",
        desc: "An all-transistorized H-Bridge motor direction controller designed for bi-directional DC motor control without the mechanical latency and wear of relays. The circuit is optimized for high-power switching and low signal load on the controlling microcontrollers or PLCs.<br><br>The H-Bridge is built using high-side TP125 PNP power transistors and low-side TIP120 NPN Darlington power transistors, which supply high current and gain to the motor. Four 2N2222 NPN driver transistors act as high-speed pre-amplifiers to trigger the main power switches from low-current MCU GPIO pins. Inductive kickback protection is handled by four 1N4001 flyback diodes, providing a safe discharge path for the back EMF. The design features optimal biasing resistor networks and pull-up/pull-down safety resistors to prevent accidental cross-conduction (short-circuits).",
        tech: ["TP125 Transistors", "TIP120 Darlingtons", "2N2222 Drivers", "1N4001 Diodes", "H-Bridge Topology", "Biasing Circuit Design", "EagleCAD"],
        images: [
            "assets/images/page_8_img_1.png",
            "assets/images/page_8_img_0.png"
        ]
    },
    p6: {
        title: "DAQ System for Digital Power Electronics",
        subtitle: "Industrial Isolation Board (Ongoing)",
        desc: "A highly isolated dual-PCB data acquisition and processing system designed to safely acquire high-voltage power parameters (three-phase AC voltages & currents, DC bus voltage, DC current) for digital control loops in power electronics systems (inverters, rectifiers, converter systems).<br><br>To keep the control logic safe from dangerous high-voltage lines, the base board features AMC1200 isolation amplifiers providing complete galvanic isolation. Signal conditioning is performed by low-noise MCP6002 operational amplifiers and RC low-pass anti-aliasing filters. Isolated DC current is monitored via CT431 Hall effect current sensors. The controller card features an ESP32 microcontroller that samples the isolated ADCs, executes high-speed two-pass RMS calculation algorithms (removing DC offsets), applies piecewise linear calibration algorithms, generates 8 complementary PWM channels with dead-time control (buffered via SN74LVC2G17), and transmits data via RS485 Modbus RTU (ISL83072).",
        tech: ["ESP32", "AMC1200 Isolation", "CT431 Hall Sensor", "MCP6002 Op-Amp", "ISL83072 RS485", "Modbus RTU", "Calibration Algorithms", "KiCAD"],
        images: [
            "assets/images/page_38_img_0.png",
            "assets/images/page_37_img_0.png"
        ]
    },
    p7: {
        title: "Long-Distance RS485 Tilt Monitor (260m)",
        subtitle: "Industrial Telemetry Node",
        desc: "A long-distance industrial monitoring system developed to transmit precise X/Y/Z triaxial angle data from a remote tilt sensor to a control room over 260 meters of CAT6 cable without signal attenuation or noise disruption.<br><br>The remote sensor transmitter outputs data using the industrial RS485 protocol and Modbus RTU (9600 baud, 8N1). At the receiver end, a MAX485 transceiver converts the differential RS485 lines to UART signals readable by an ESP32 controller. The ESP32 extracts the angle data, formats it into JSON packets, and uploads them over Wi-Fi to a remote database. If the network credentials change, holding the BOOT button triggers a captive portal Wi-Fi hotspot, allowing users to configure the local network, device name, and cloud URL via a simple web interface. Successfully verified with zero packet loss or timeout errors over the entire 260m cable length.",
        tech: ["ESP32", "MAX485 Transceiver", "RS-DIP-N01-1 Sensor", "Modbus RTU", "Wi-Fi Hotspot", "Captive Portal", "HTTP POST JSON", "CAT6 Transmission"],
        images: [
            "assets/images/page_48_img_1.png",
            "assets/images/page_48_img_0.png"
        ]
    }
};

const hackathonData = {
    bb3: {
        title: "Bug Buster 3.0",
        subtitle: "1st Place Rank — SPIT National Hackathon",
        desc: "An intensive 24-hour national level electronics hardware debugging and circuit restoration hackathon. Teams were presented with a partially assembled PCB containing multiple intentional hardware faults, missing copper tracks, incorrect component values, bad orientations, and open connections.<br><br>As the Lead Hardware Debugger, Aakib performed systematic circuit analysis, continuity testing, signal tracing with multimeters/DSOs, and rewrote layout connections using jumper wires and precision soldering. Successfully diagnosed and restored 12 interconnected modules—including a Digital Voltmeter, Digital Ammeter, DSO, Boost Converter, STM32 Blue Pill controller, VCO, Function Generator Waveform Selector, and PWM Generator—within the time limit, securing 1st Rank.",
        tech: ["PCB Troubleshooting", "Soldering & Rework", "Oscilloscope Debugging", "Reverse Engineering", "Analog & Digital Circuits"],
        images: [
            "assets/images/page_75_img_1.png",
            "assets/images/page_64_img_0.png",
            "assets/images/page_63_img_0.png"
        ]
    },
    hf: {
        title: "HackFusion Hackathon",
        subtitle: "Top 12 Finalist — SPIT IoT Challenge",
        desc: "A 24-hour hardware and IoT development hackathon. Designed and built a Smart ICU Patient Vitals Monitoring and Security Access Control System from scratch.<br><br>The system reads real-time patient vitals (ECG, body temperature, activity/motion) using bio-sensors. A core STM32 microcontroller executing FreeRTOS schedules and multitasking processes the sensor signals and encrypts the packets. The data is transmitted to an ESP32 gateway, which displays live vitals on a local TFT screen and uploads the encrypted telemetry to a cloud database via Wi-Fi. It includes a cloud dashboard for doctor visualization, automated SMS/email alerts for critical events, and an RFID-based security door locking mechanism operated by a servo motor.",
        tech: ["STM32 Microcontroller", "FreeRTOS", "ESP32", "TFT Display", "ECG & Bio-sensors", "RFID Access Control", "Wi-Fi Cloud Integration"],
        images: [
            "assets/images/page_61_img_0.png",
            "assets/images/page_59_img_0.png",
            "assets/images/page_60_img_0.png"
        ]
    },
    bb2: {
        title: "Bug Buster 2.0",
        subtitle: "Top 30 National Qualifier",
        desc: "A 24-hour hardware troubleshooting and debugging hackathon. Provided with a complex PCB featuring pre-inserted bugs, missing tracks, and components with incorrect values or placements. Successfully debugged and restored 8 active circuit modules—including Humidity Sensing, Soil Moisture, DAC Interface, Electronic Security, PWM Fan Control, and Battery Charging modules—securing a place in the national top 30.",
        tech: ["Hardware Debugging", "PCB Rework", "Multimeter Probing", "Circuit Analysis", "Sensors Interfacing"],
        images: [
            "assets/images/page_57_img_0.png",
            "assets/images/page_57_img_1.png",
            "assets/images/page_56_img_0.png"
        ]
    },
    sih: {
        title: "Smart India Hackathon",
        subtitle: "Precision Agriculture Innovation",
        desc: "Developed <em>FarmHeal</em>, a high-impact precision agriculture pesticide spraying platform designed to reduce chemical pesticide consumption, cut farming costs, and protect soil health.<br><br>The system uses a Raspberry Pi and camera module mounted on a rover/drone. It runs a local TensorFlow Lite image classification model to detect crop diseases and severity in real-time, utilizing OpenCV for computer vision processing. Based on the severity, it automatically toggles between dual pesticide tanks (bio-pesticides for <50% infection, chemical pesticides for >50% infection) and adjusts the spray location, duration, and pump nozzle duty cycle. Integrates NPK, pH, moisture, and temperature sensors, and features a hybrid solar/dynamo charging system. Reduces chemical use by ~40% and saves ₹1,500–2,000/acre annually.",
        tech: ["Raspberry Pi", "TensorFlow Lite", "OpenCV", "Python", "NPK/Soil Sensors", "Precision Spraying", "Hybrid Solar Power"],
        images: [
            "assets/images/page_67_img_0.png"
        ]
    }
};

/* ==========================================================================
   INTERACTIVE CANVAS BACKGROUND (PCB TRACES)
   ========================================================================== */
const canvas = document.getElementById('pcb-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initPCB();
});

// PCB Configuration
const nodes = [];
const connections = [];
const pulses = [];
const maxNodes = 60;
let mouse = { x: null, y: null, radius: 150 };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

class PCBNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseRadius = Math.random() * 2 + 2;
        this.radius = this.baseRadius;
        this.glow = 0;
        this.connectedNodes = [];
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.glow > 0.1 ? `rgba(0, 245, 255, ${this.glow})` : 'rgba(0, 180, 216, 0.2)';
        ctx.fill();

        // Node outline rings
        if (this.glow > 0.2) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 245, 255, ${this.glow * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }

    update() {
        // Interactivity with mouse
        if (mouse.x !== null && mouse.y !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
                const factor = 1 - dist / mouse.radius;
                this.glow = Math.max(this.glow, factor);
                this.radius = this.baseRadius + factor * 2;
                
                // Randomly spawn pulses on hover
                if (Math.random() < 0.015 && this.connectedNodes.length > 0) {
                    const target = this.connectedNodes[Math.floor(Math.random() * this.connectedNodes.length)];
                    spawnPulse(this, target);
                }
            } else {
                this.glow *= 0.95;
                this.radius = this.radius * 0.95 + this.baseRadius * 0.05;
            }
        } else {
            this.glow *= 0.95;
            this.radius = this.radius * 0.95 + this.baseRadius * 0.05;
        }
    }
}

class PCBPulse {
    constructor(startNode, endNode) {
        this.startX = startNode.x;
        this.startY = startNode.y;
        this.endX = endNode.x;
        this.endY = endNode.y;
        this.progress = 0;
        this.speed = Math.random() * 0.02 + 0.015;
    }

    draw() {
        const currentX = this.startX + (this.endX - this.startX) * this.progress;
        const currentY = this.startY + (this.endY - this.startY) * this.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00f5ff';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00f5ff';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
    }

    update() {
        this.progress += this.speed;
        return this.progress >= 1;
    }
}

function spawnPulse(startNode, endNode) {
    if (pulses.length < 35) {
        pulses.push(new PCBPulse(startNode, endNode));
    }
}

function initPCB() {
    nodes.length = 0;
    connections.length = 0;
    pulses.length = 0;

    // Create nodes grid-like with random offsets to look like circuit vias
    const cols = 8;
    const rows = 6;
    const cellW = width / cols;
    const cellH = height / rows;

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            // Only spawn node on some cells to make it organic
            if (Math.random() < 0.7) {
                const x = c * cellW + cellW / 2 + (Math.random() - 0.5) * (cellW * 0.6);
                const y = r * cellH + cellH / 2 + (Math.random() - 0.5) * (cellH * 0.6);
                nodes.push(new PCBNode(x, y));
            }
        }
    }

    // Connect nodes with orthogonal paths (typical of PCB routing)
    for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        
        // Find nearest nodes to connect
        const nearest = nodes
            .map((n, idx) => ({ node: n, dist: Math.hypot(n.x - n1.x, n.y - n1.y), idx }))
            .filter(item => item.idx !== i)
            .sort((a, b) => a.dist - b.dist)
            .slice(0, 2 + Math.floor(Math.random() * 2)); // 2 to 3 connections

        nearest.forEach(item => {
            const n2 = item.node;
            if (!n1.connectedNodes.includes(n2)) {
                n1.connectedNodes.push(n2);
                n2.connectedNodes.push(n1);
                connections.push({ n1, n2 });
            }
        });
    }
}

function animatePCB() {
    ctx.clearRect(0, 0, width, height);

    // Draw trace paths (connections)
    ctx.beginPath();
    connections.forEach(conn => {
        // Draw orthogonal tracks: start -> midpoint -> end
        ctx.moveTo(conn.n1.x, conn.n1.y);
        
        const midX = conn.n1.x + (conn.n2.x - conn.n1.x) * 0.5;
        ctx.lineTo(midX, conn.n1.y);
        ctx.lineTo(midX, conn.n2.y);
        ctx.lineTo(conn.n2.x, conn.n2.y);
    });
    ctx.strokeStyle = 'rgba(0, 180, 216, 0.04)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Update and draw nodes
    nodes.forEach(node => {
        node.update();
        node.draw();
    });

    // Update and draw signal pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        const done = pulse.update();
        if (done) {
            pulses.splice(i, 1);
        } else {
            pulse.draw();
        }
    }

    requestAnimationFrame(animatePCB);
}

// Start PCB Background
initPCB();
animatePCB();


/* ==========================================================================
   SCROLL REVEAL & NAVIGATION HIGHLIGHT
   ========================================================================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, revealOptions);

sections.forEach(sec => {
    observer.observe(sec);
});

// Scroll Events
window.addEventListener('scroll', () => {
    let current = '';
    
    // Scrolled class for navbar styling
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll active link highlight
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


/* ==========================================================================
   MOBILE NAVIGATION TOGGLE
   ========================================================================== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-xmark');
});

// Close menu when clicking link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.querySelector('i').classList.add('fa-bars');
        navToggle.querySelector('i').classList.remove('fa-xmark');
    });
});


/* ==========================================================================
   INSPECTION MODAL / LIGHTBOX LOGIC
   ========================================================================== */
const modal = document.getElementById('inspector-modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalThumbs = document.getElementById('modal-thumbs');
const modalText = document.getElementById('modal-text');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on clicking outside wrapper
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC key to close
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

/* Display Project details */
window.openProjectDetails = function(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalTitle.textContent = `HW_INSPECT // ${data.title.toUpperCase()}`;
    
    // Set text description
    let techHtml = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    modalText.innerHTML = `
        <div>
            <span class="badge-hud">${data.subtitle.toUpperCase()}</span>
            <h4 style="margin: 10px 0;">${data.title}</h4>
            <p>${data.desc}</p>
        </div>
        <div>
            <h5 style="font-family: var(--font-mono); color: var(--accent); margin-bottom: 8px;">INTEGRATED_TECHNOLOGIES:</h5>
            <div class="modal-tech-list">${techHtml}</div>
        </div>
    `;

    // Populate images & thumbnails
    setupGallery(data.images);
    openModal();
};

/* Display Hackathon details */
window.openGallery = function(hackId) {
    const data = hackathonData[hackId];
    if (!data) return;

    modalTitle.textContent = `HACKATHON_RECORD // ${data.title.toUpperCase()}`;

    let techHtml = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    modalText.innerHTML = `
        <div>
            <span class="badge-hud">${data.subtitle.toUpperCase()}</span>
            <h4 style="margin: 10px 0;">${data.title}</h4>
            <p>${data.desc}</p>
        </div>
        <div>
            <h5 style="font-family: var(--font-mono); color: var(--accent); margin-bottom: 8px;">CORE_COMPETENCIES:</h5>
            <div class="modal-tech-list">${techHtml}</div>
        </div>
    `;

    setupGallery(data.images);
    openModal();
};

/* Display Certificate lightbox */
window.openCertLightbox = function(imgSrc, titleText) {
    modalTitle.textContent = `CREDENTIAL_VERIFICATION // CERTIFICATE`;
    
    modalText.innerHTML = `
        <div>
            <span class="badge-hud">SYSTEM_VERIFIED_OK</span>
            <h4 style="margin: 15px 0;">${titleText}</h4>
            <p>Official credential for Aakib Patel. Verified by सरदार पटेल कॉलेज (SPIT) / State Level Exhibition panels.</p>
        </div>
        <div style="margin-top: auto;">
            <a href="${imgSrc}" download class="submit-btn" style="display: inline-flex; width: auto;">
                <span class="btn-text">DOWNLOAD ORIGINAL</span>
                <span class="btn-icon"><i class="fa-solid fa-download"></i></span>
            </a>
        </div>
    `;

    setupGallery([imgSrc]);
    openModal();
};

/* Helper to setup Image Gallery inside Modal */
function setupGallery(images) {
    modalThumbs.innerHTML = '';
    
    if (!images || images.length === 0) {
        modalImg.src = '';
        return;
    }

    // Set active main image
    modalImg.src = images[0];

    // Populate thumbs if more than 1 image
    if (images.length > 1) {
        images.forEach((img, idx) => {
            const thumb = document.createElement('div');
            thumb.className = `modal-thumb ${idx === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${img}" alt="Thumbnail ${idx}">`;
            
            thumb.addEventListener('click', () => {
                document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                modalImg.src = img;
            });
            
            modalThumbs.appendChild(thumb);
        });
        modalThumbs.style.display = 'flex';
    } else {
        modalThumbs.style.display = 'none';
    }
}


/* ==========================================================================
   CONTACT FORM SUBMISSION (FORMSUBMIT.CO KEYLESS INTEGRATION)
   ========================================================================== */
document.getElementById('connection-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const submitButton = event.target.querySelector('button[type="submit"]');
  const originalHTML = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.textContent = "TRANSMITTING...";

  fetch("https://formsubmit.co/ajax/aakibpatel144@gmail.com", {
    method: "POST",
    body: new FormData(event.target)
  })
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(function(data) {
    submitButton.textContent = "TRANSMISSION SENT SUCCESSFULLY. ACK_OK";
    event.target.reset();
  })
  .catch(function(error) {
    submitButton.textContent = "TRANSMISSION FAILED. RETRY";
    console.error("Submission error:", error);
  })
  .finally(function() {
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = originalHTML;
    }, 3000);
  });
});
