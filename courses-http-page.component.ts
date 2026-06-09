class CoursesHttpPageComponent {
  courses = [
    { id: 1, title: "Angular Basics", category: "Frontend", duration: 20 },
    { id: 2, title: "RxJS Fundamentals", category: "Frontend", duration: 16 },
    { id: 3, title: "TypeScript Essentials", category: "Programming", duration: 18 },
    { id: 4, title: "Node.js Intro", category: "Backend", duration: 22 },
    { id: 5, title: "REST API Basics", category: "Backend", duration: 14 }
  ];
  
  isLoading = false;
  errorMessage = '';
  showList = true;

  setLoadingState() {
    this.isLoading = true;
    this.errorMessage = '';
    this.showList = false;
  }

  setSuccessState() {
    this.isLoading = false;
    this.errorMessage = '';
    this.showList = true;
  }

  setErrorState() {
    this.isLoading = false;
    this.errorMessage = 'Не вдалося завантажити курси. Перевірте, чи запущено json-server.';
    this.showList = false;
  }
}