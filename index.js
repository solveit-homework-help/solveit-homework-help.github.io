// Update the gradient colors to match exact orange theme
document.documentElement.style.setProperty('--orange-primary', '#F7931E');
document.documentElement.style.setProperty('--orange-secondary', '#FBB03B');

const styles = `
  .bg-custom-gradient {
    background: linear-gradient(135deg, #FBB03B 0%, #F7931E 100%);
  }
  .bg-custom-orange {
    background-color: #F7931E;
  }
  .text-custom-orange {
    color: #F7931E;
  }
  .border-custom-orange {
    border-color: #F7931E;
  }
  .hover-custom-orange:hover {
    background-color: #FBB03B;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', () => {
  // Previous implementation remains the same, but update these classes:
  
  // Update nav button
  document.querySelector('nav button').className = 'bg-custom-orange text-white px-4 py-2 rounded-lg hover-custom-orange';
  
  // Update main background
  document.querySelector('main > div').className = 'min-h-screen bg-custom-gradient';
  
  // Update CTA buttons
  document.querySelectorAll('.bg-orange-500').forEach(button => {
    button.className = button.className.replace('bg-orange-500', 'bg-custom-orange hover-custom-orange');
  });
  
  // Update feature icons
  document.querySelectorAll('.bg-orange-100').forEach(div => {
    div.className = div.className.replace('text-orange-500', 'text-custom-orange');
  });
  
  // Update logo background
  document.querySelector('nav .bg-orange-500').className = 'w-8 h-8 bg-custom-orange rounded-lg';
  
  // Rest of the implementation remains the same
});
