import path from "path"

const routes = {
    home: {
        path: '/'
      },

      auth: {
        path: '/auth',
    
        login: {
          path: '/auth/login'
        },
    
        logout: {
          path: '/auth/logout'
        },
    
        forgotPassword: {
          path: '/auth/forgot-password'
        },
    
        resetPassword: {
          path: '/auth/reset-password'
        },
    
        signUp: {
          path: '/auth/register'
        },
    
        verification: {
          path: '/auth/verification'
        }
      },

      projectManagement: {
        path: '/project-management',
        projectOverview: {
          path: '/project-management/project-overview',
        }
      }
}
export default routes