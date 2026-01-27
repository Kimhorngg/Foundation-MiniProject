
        const btn = document.getElementById("menu-btn");
      const menu = document.getElementById("mobile-menu");
      const nav = document.getElementById("navbar");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");

        if (window.innerWidth < 1024) {
          nav.classList.toggle("bg-[#e1ecde]");
          nav.classList.toggle("bg-white");
        }
      });
        function toggleFAQ(id) {
            const content = document.getElementById(`content-${id}`);
            const icon = document.getElementById(`icon-${id}`);
            
            // Check if this FAQ is currently open
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
            
            if (isOpen) {
                // Close this FAQ
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Open this FAQ
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Optional: Close all FAQs when clicking outside
        document.addEventListener('click', function(event) {
            const faqButtons = document.querySelectorAll('.faq-button');
            const isClickInsideFAQ = Array.from(faqButtons).some(button => 
                button.contains(event.target)
            );
        
        });
         AOS.init();
       
        
