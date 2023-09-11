var ddnayo_id_hotel;

var ams_domain = "booking.ddnayo.com";

function WindowOpen(url, nm, width, height, scroll, resize) {
  if (scroll == null) scroll = "auto";
  if (resize == null) resize = "no";

  var left = (window.screen.width - width) / 2;
  var top = (window.screen.height - height) / 2;
  var status = "height=" + height + ",width=" + width + ",left=" + left + ",top=" + top + ",resizable=" + resize + ",scrollbars=" + scroll + ",status=yes";

  var winAppm = window.open(url, nm, status);
  winAppm.focus();
}


function ddnayoAmsOpen(id_hotel) {

  var url = ddnayoGetCalendarUrl(id_hotel);

  WindowOpen(url, "ddnayoAms", 900, 650, "yes", "yes");
}

function ddnayoCalendarOpen(id_hotel) {
  var url = ddnayoGetCalendarUrl(id_hotel);
  WindowOpen(url, "ddnayoAms", 900, 650, "yes", "yes");
}

function ddnayoAmsIframeOpen(id_frame) {
  document.getElementById(id_frame).src = ddnayoGetAmsUrl(ddnayo_id_hotel) + "&iframe=true";
}

function ddnayoCalendarIframeOpen(id_frame) {
  document.getElementById(id_frame).src = ddnayoGetCalendarUrl(ddnayo_id_hotel);
}

/* 가평넷 전용 */
function ddnayoAmsIframe(id_frame) {
  location.href = ddnayoGetCalendarUrl(ddnayo_id_hotel);
  window.resizeTo(900, 650);
}

/* 가평넷 전용 */
function ddnayoAmsStateOnlyIframe(id_frame) {

  location.href = ddnayoAmsStateOnlyUrl(ddnayo_id_hotel);

  try {
    window.resizeTo(900, 650);
  } catch (e) {
  }

  //document.getElementById(id_frame).src = ddnayoGetAmsUrl(ddnayo_id_hotel) + "&iframe=true";
}

function ddnayoGetAmsUrl(id_hotel) {
  var url = "//" + ams_domain + "/booking-calendar?accommodationId=" + id_hotel;
  return url;
}

function ddnayoGetCalendarUrl(id_hotel) {
  var url = "//" + ams_domain + "/booking-calendar-status?accommodationId=" + id_hotel;
  return url;
}

function ddnayoAmsStateOnlyUrl(id_hotel) {
  var url = "//" + ams_domain + "/booking-calendar-status?accommodationId=" + id_hotel + "&is_state_only=true"
  return url;
}
