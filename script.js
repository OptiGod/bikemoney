            let totalAmount = 0;
            let purchaseHistory = []; // 구매 기록 저장 배열

            // 페이지 로드 시 저장된 금액을 불러오고 모달 창과 계좌 정보 숨기기
            window.onload = function() {
                if (localStorage.getItem('totalAmount')) {
                    totalAmount = parseInt(localStorage.getItem('totalAmount'));
                    document.getElementById('total').innerText = totalAmount;
                }

                // 모달 창 숨기기
                closeModal();

                // 계좌 정보 숨기기
                document.getElementById('payment-options').classList.add('hidden');
                document.getElementById('account-info').classList.add('hidden');
            }

            function addToCart(price) {
                totalAmount += price;
                document.getElementById('total').innerText = totalAmount;
                localStorage.setItem('totalAmount', totalAmount);

                // 구매 기록에 상품 추가 (예: '긴 한바퀴', '작은 1바퀴')
                if (price === 500) {
                    purchaseHistory.push('긴 한바퀴');
                } else if (price === 100) {
                    purchaseHistory.push('작은 1바퀴');
                }
            }

            function showPaymentOptions() {
                document.getElementById('payment-options').classList.remove('hidden');
            }

            function showAccountInfo() {
                document.getElementById('account-info').classList.remove('hidden');
                showPaymentModal('계좌이체가 필요합니다. 카카오뱅크: 7777-03-2467083 토스뱅크: 1908-8134-3094로 돈을 보내주세요');
            }

            function processCardPayment() {
                showPaymentModal('죄송합니다. 현재는 카드 결제를 지원하지 않아요');
            }

            function showPaymentModal(message) {
                document.getElementById('modal-message').innerText = message;
                document.getElementById('payment-modal').classList.remove('hidden');
            }

            function closeModal() {
                document.getElementById('payment-modal').classList.add('hidden');
            }

            function resetAmount() {
                totalAmount = 0;
                purchaseHistory = []; // 구매 기록 초기화
                document.getElementById('total').innerText = totalAmount;
                localStorage.setItem('totalAmount', totalAmount);
                document.getElementById('payment-options').classList.add('hidden');
                document.getElementById('account-info').classList.add('hidden');
            }

            // 읽기 버튼 클릭 이벤트 (ResponsiveVoice 사용)
            function readTotalAmount() {
              const longCount = purchaseHistory.filter(item => item.includes('긴 한 바퀴')).length;
              const smallCount = purchaseHistory.filter(item => item.includes('작은 1바퀴')).length;
              const text = `오마미의 주문 내역은 긴 한 바퀴 ${longCount}개, 작은 1바퀴 ${smallCount}개로 총 금액은 ${totalAmount}원입니다.'`;
              responsiveVoice.speak(text, "Korean Female");
            }
// ... (이전 JavaScript 코드 유지) ...

// 페이지 로드 시 저장된 금액을 불러오고 모달 창과 계좌 정보 숨기기
window.onload = function() {
    // ... (이전 로직 유지) ...

    // 모달 창 숨기기 (display: none 설정)
    const paymentModal = document.getElementById('payment-modal');
    paymentModal.style.display = 'none'; 
}

// ... (나머지 함수 코드는 동일) ...

function showPaymentModal(message) {
    document.getElementById('modal-message').innerText = message;
    document.getElementById('payment-modal').style.display = 'flex'; // display 속성을 flex로 변경
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none'; // display 속성을 none으로 변경
}
