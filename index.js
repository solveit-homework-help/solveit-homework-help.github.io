document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  // Create navigation
  const nav = document.createElement('nav');
  nav.className = 'flex justify-between items-center p-4';
  nav.innerHTML = `
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-orange-500 rounded-lg">
        <img 
                src="SolveIt logo.png" 
                alt="SolveIt App Screenshot"
                class="rounded-lg shadow-xl"
        />
      </div>
      <span class="text-xl font-semibold">SolveIt</span>
    </div>
    <div class="flex space-x-4">
      <a href="#features" class="text-gray-700">Features</a>
      <a href="#download" class="text-gray-700">Download</a>
      <button class="bg-orange-500 text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </div>
  `;

  // Create main content
  const main = document.createElement('main');
  main.innerHTML = `
    <div class="min-h-screen bg-gradient-to-r from-orange-300 to-red-200">
      <!-- Hero Section -->
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-5xl font-bold mb-4 text-white">
            The Ultimate Study Companion for Students!
          </h1>
          <p class="text-lg mb-6 text-gray-700">
            Get instant help with your homework, connect with tutors, and improve
            your grades with SolveIt.
          </p>
          <div class="flex space-x-4">
            <button class="bg-white text-gray-800 px-6 py-3 rounded-lg flex items-center">
              Download Now 
              <i data-lucide="chevron-right" class="ml-2"></i>
            </button>
            <button class="border-2 border-white text-white px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="relative">
            <img 
              src="playstore feature graphic.png" 
              alt="SolveIt App Screenshot"
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="bg-white py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">
            Why Choose SolveIt?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Feature cards -->
            ${createFeatureCard('camera', 'Scan & Solve', 'Simply scan your homework question and get instant solutions')}            
            ${createFeatureCard('clock', '24/7 Support', 'Get help anytime, anywhere with our round-the-clock support')}
            ${createFeatureCard('book', 'Step-by-Step', 'Detailed explanations to help you understand concepts better')}
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="py-16 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Ace Your Homework?</h2>
        <p class="mb-8 text-gray-700">
          Download SolveIt now and join thousands of students who are already improving
          their grades with our app.
        </p>
        <button class="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center mx-auto">
          Download SolveIt 
          <i data-lucide="chevron-right" class="ml-2"></i>
        </button>
      </div>
    </div>
  `;

  // Create footer
  const footer = document.createElement('footer');
  footer.className = 'bg-white py-8';
  footer.innerHTML = `
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-orange-500 rounded-lg"></div>
            <span class="text-xl font-semibold">SolveIt</span>
          </div>
          <p class="text-gray-600">
            Your ultimate study companion. Get instant homework help and improve
            your academic performance.
          </p>
        </div>
        <div>
          <h3 class="font-semibold mb-4">Legal</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-600">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4">Contact</h3>
          <p class="text-gray-600">support@solveit.com</p>
          <p class="text-gray-600">+1 (234) 567-890</p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t text-center text-gray-600">
        © 2024 SolveIt. All rights reserved.
      </div>
    </div>
  `;

  // Helper function to create feature cards
  function createFeatureCard(icon, title, description) {
    return `
      <div class="p-6 text-center">
        <div class="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
          <i data-lucide="${icon}" class="text-orange-500"></i>
        </div>
        <h3 class="font-semibold mb-2">${title}</h3>
        <p class="text-gray-600">${description}</p>
      </div>
    `;
  }

  root.appendChild(nav);
  root.appendChild(main);
  root.appendChild(footer);

  // Initialize Lucide icons
  lucide.createIcons();
});
