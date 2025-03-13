<script>
import Sidebar from "./Sidebar.vue";
import { useRouter } from "vue-router";

export default {
  components: { Sidebar },
  data() {
    return {
      darkMode: false,
      selectedTab: "link"
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    const router = useRouter();
    
    if (!token) {
      router.push("/"); // Redirect to login page if no token found
    }
  }
};
</script>

  
  <style scoped>
  .workspace {
    display: flex;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 10px;
    border-bottom: 2px solid #ddd;
  }
  
  .toggle {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .input-container {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }
  
  .input-container button {
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  .active {
    background: blue;
    color: white;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ddd;
  }
  
  .summarize-btn {
    background: blue;
    color: white;
    padding: 10px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  