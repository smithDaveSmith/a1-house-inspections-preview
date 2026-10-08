const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){ if(!toggle)return;nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu'; }
if(toggle){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';nav.classList.toggle('open',!open);toggle.setAttribute('aria-expanded',String(!open));toggle.textContent=open?'Menu':'Close';});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});matchMedia('(min-width: 801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});}
const form=document.querySelector('#enquiry-form');
if(form){
 const select=form.elements.service;const selected=new URLSearchParams(location.search).get('service');if([...select.options].some(o=>o.value===selected))select.value=selected;
 const output=document.querySelector('#enquiry-result');const draft=document.querySelector('#draft');const emailLink=document.querySelector('#open-email');const copyButton=document.querySelector('#copy-enquiry');const status=document.querySelector('#copy-status');
 const maxLengths={name:100,email:160,phone:50,address:200,date:100,details:1500};
 for(const [key,max] of Object.entries(maxLengths)){form.elements[key].maxLength=max;form.elements[key].addEventListener('input',()=>form.elements[key].setCustomValidity(''));}
 form.addEventListener('submit',e=>{e.preventDefault();for(const key of ['name','address']){const field=form.elements[key];field.setCustomValidity(field.value.trim()?'':'Please enter '+(key==='name'?'your name.':'the property location.'));}if(!form.reportValidity())return;
 const data=new FormData(form);const selectedText=select.options[select.selectedIndex].text;
 const body=[`Hello A1 House Inspections,`,``,`I would like to enquire about: ${selectedText}`,`Property location: ${String(data.get('address')).trim()}`,`Preferred timing: ${String(data.get('date')).trim()||'To be discussed'}`,``,`Details: ${String(data.get('details')).trim()||'Please contact me to discuss.'}`,``,`Name: ${String(data.get('name')).trim()}`,`Email: ${data.get('email')}`,`Phone: ${String(data.get('phone')).trim()||'Not provided'}`].join('\n');
 draft.textContent=body;emailLink.href='mailto:mrstephenoreilly@gmail.com?subject='+encodeURIComponent('Quotation enquiry — '+selectedText)+'&body='+encodeURIComponent(body);output.hidden=false;status.textContent='';output.focus();output.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
 });
 form.addEventListener('input',()=>{if(!output.hidden)output.hidden=true;});
 copyButton.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(draft.textContent);status.textContent='Copied. Paste this into an email to mrstephenoreilly@gmail.com and send it.';}catch{status.textContent='Copy is unavailable in this browser. Select the draft text above and copy it manually.';}});
}
