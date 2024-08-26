//タブをリセットする関数
const resetTab = (e) => {
  const tabs = document.querySelectorAll('[data-tab="btn"]');
  e.currentTarget.removeAttribute('aria-selected');
  tabs.forEach(tab => {
      tab.classList.remove('is-active');
      tab.tabIndex = -1;
  });

  const tabContents = document.querySelectorAll('[data-tab="content"]');
  tabContents.forEach(content => {
    content.classList.remove('is-active');
    content.tabIndex = -1;
    content.style.display = 'none';
  });
}

//タブをセットする関数
const setTab = (e, id) => {
  e.currentTarget.setAttribute('aria-selected', 'true');
  e.currentTarget.tabIndex = 0;
  e.currentTarget.classList.add('is-active');
  document.getElementById(id).classList.add('is-active');
  document.getElementById(id).tabIndex = 0;
  document.getElementById(id).style.display = 'block';
}

//タブを切り替える関数
const tabChange = (e, id) => {
  resetTab(e);
  setTab(e, id);
}