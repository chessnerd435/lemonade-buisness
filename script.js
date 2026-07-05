document.addEventListener('DOMContentLoaded', () => {
    // State
    let smallCups = 0;
    let bigCups = 0;
    const PRICE_SMALL = 1.00;
    const PRICE_BIG = 2.00;

    // Elements
    const qtySmallEl = document.getElementById('qty-small');
    const qtyBigEl = document.getElementById('qty-big');
    const totalCupsEl = document.getElementById('total-cups');
    const totalPriceEl = document.getElementById('total-price');
    const addressInput = document.getElementById('address');
    
    // Buttons
    const btnSmallMinus = document.getElementById('btn-small-minus');
    const btnSmallPlus = document.getElementById('btn-small-plus');
    const btnBigMinus = document.getElementById('btn-big-minus');
    const btnBigPlus = document.getElementById('btn-big-plus');
    const btnOrder = document.getElementById('btn-order');
    
    // Modal
    const modal = document.getElementById('success-modal');
    const modalAddress = document.getElementById('modal-address');
    const btnCloseModal = document.getElementById('btn-close-modal');

    // Functions
    function updateUI() {
        qtySmallEl.textContent = smallCups;
        qtyBigEl.textContent = bigCups;
        
        const totalCups = smallCups + bigCups;
        const totalPrice = (smallCups * PRICE_SMALL) + (bigCups * PRICE_BIG);
        
        totalCupsEl.textContent = totalCups;
        totalPriceEl.textContent = '$' + totalPrice.toFixed(2);
    }

    // Event Listeners for Cart
    btnSmallPlus.addEventListener('click', () => {
        smallCups++;
        updateUI();
    });

    btnSmallMinus.addEventListener('click', () => {
        if (smallCups > 0) {
            smallCups--;
            updateUI();
        }
    });

    btnBigPlus.addEventListener('click', () => {
        bigCups++;
        updateUI();
    });

    btnBigMinus.addEventListener('click', () => {
        if (bigCups > 0) {
            bigCups--;
            updateUI();
        }
    });

    // Order Logic
    btnOrder.addEventListener('click', () => {
        const address = addressInput.value.trim();
        const totalCups = smallCups + bigCups;

        if (totalCups === 0) {
            alert('Please add at least one cup of lemonade to your order! 🍋');
            return;
        }

        if (!address) {
            alert('Please enter your delivery address so we know where to send the lemonade! 🏠');
            addressInput.focus();
            return;
        }

        // Show success modal
        modalAddress.textContent = address;
        modal.classList.remove('hidden');
    });

    // Close Modal Logic
    btnCloseModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        // Reset form
        smallCups = 0;
        bigCups = 0;
        addressInput.value = '';
        updateUI();
    });
});
