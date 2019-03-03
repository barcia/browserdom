// Get the OS info
export default function() {
	if (navigator.appVersion.indexOf('Macintosh')!=-1) return {name: 'macos'};
	if (navigator.appVersion.indexOf('X11')!=-1) return {name: 'linux'};
	if (navigator.appVersion.indexOf('Windows')!=-1) return {name: 'windows'};
	if (navigator.appVersion.indexOf('iPhone')!=-1) return {name: 'ios'};
	if (navigator.appVersion.indexOf('iPad')!=-1) return {name: 'ios'};
	if (navigator.appVersion.indexOf('Android')!=-1) return {name: 'android'};
}
