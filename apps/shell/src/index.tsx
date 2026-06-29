// Split entry so Module Federation shared singletons (react, react-dom, @pcb/*)
// are available before any app code runs — avoids "Shared module is not available
// for eager consumption".
import('./bootstrap');

export {};
