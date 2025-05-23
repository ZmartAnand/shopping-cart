import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  username = "";
  password = "";

  constructor(private router: Router) {}

  login() {
    if (this.username === "admin" && this.password === "admin") {
      alert("Login successful!");
      this.router.navigate(["/home"]);
    } else {
      alert("Invalid credentials");
    }
  }
}
