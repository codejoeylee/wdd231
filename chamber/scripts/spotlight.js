async function loadSpotlightMembers() {
    try {
        const response = await fetch('json/members.json');
        const data = await response.json();
        
        
        const eligibleMembers = data.companies.filter(member => 
            member.membershipLevel === 1 || member.membershipLevel === 2
        );
        
       
        const numberOfSpotlights = Math.floor(Math.random() * 2) + 2; 
        const spotlightMembers = [];
        
        while (spotlightMembers.length < numberOfSpotlights && eligibleMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
            spotlightMembers.push(eligibleMembers.splice(randomIndex, 1)[0]);
        }
        
        
        const container = document.querySelector('.spotlight-container');
        container.innerHTML = '';
        
        spotlightMembers.forEach(member => {
            
            const membershipText = member.membershipLevel === 1 ? 'Gold' : 'Silver';
            
            const card = document.createElement('div');
            card.className = 'spotlight-card';
            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="${member.image}" alt="${member.name}" loading="lazy">
                <p>${member.industry}</p>
                <div class="member-info">
                    <p><i class="fa fa-map-marker"></i> ${member.address}</p>
                    <p><i class="fa fa-phone"></i> ${member.phone}</p>
                    <p><i class="fa fa-globe"></i> <a href="${member.website}" target="_blank">Website</a></p>
                </div>
                <span class="membership-level ${membershipText.toLowerCase()}">${membershipText} Member</span>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading spotlight members:', error);
    }
}


document.addEventListener('DOMContentLoaded', loadSpotlightMembers);