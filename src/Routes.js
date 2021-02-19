import React from "react";
// import Global from './modules/common/context';
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import MainLayout from "./layouts/layout/main.layout";
import CheckEmail from "./modules/check_your_email";
import ForgotPassword from "./modules/ForgotPassword";

import SetNewPassword from "./modules/SetNewPassword";
import MainDasboard from "./modules/main_dashboard";
import LoginHome from "./modules/login-home";
import AskAnExpert from "./modules/main_dashboard/components/AskAnExpert";
import MyRequests from "./modules/main_dashboard/components/MyRequests";
import Requests from "./modules/main_dashboard/components/NewRequests";
import AssignSME from "./modules/main_dashboard/components/AssignSME";
import Review from "./modules/main_dashboard/components/ReviewRequests";
import Edit_Review from "./modules/main_dashboard/components/ReviewRequests/components/Edit_Review";
import Show_Card from "./modules/main_dashboard/components/ReviewRequests/components/Show_card_view";
import AddAnswer from "./modules/main_dashboard/components/AddAnswer";
import AddCard from "./modules/main_dashboard/components/Dashboard/AddCard";
import CardViewUI from "./modules/main_dashboard/components/CardViewUi";
import SearchCards from "./modules/main_dashboard/components/SearchCards";
import PreviewCard from "./modules/main_dashboard/components/Dashboard/PreviewCard";
import OpenRequest from "./modules/main_dashboard/components/OpenRequest";
import AllRequest from "./modules/main_dashboard/components/AllRequest";
import WhatIRaised from "./modules/main_dashboard/components/WhatIRaised";
import AnaliticsLandingPage from "./modules/main_dashboard/components/AnaliticsLandingPage";
import RequestForAnswerDashboard from "./modules/main_dashboard/components/RequestForAnswerDashboard";
import RequestForAnswer from "./modules/main_dashboard/components/RequestForAnswer";
import RequestForReview from "./modules/main_dashboard/components/RequestForReview";
import AccurateComment from "./modules/main_dashboard/components/AccurateComment";
import PreviewAnswer from "./modules/main_dashboard/components/PreviewAnswer";
import RequestForAnswerLM1 from "./modules/main_dashboard/components/RequestForAnswerLM1";
import CreateNewCard from "./modules/main_dashboard/components/CreateNewCard";
import RequestAnReview from "./modules/main_dashboard/components/RequestAnReview";
import AvailableLinks from "./modules/main_dashboard/components/AvailableLinks";
import CommentsAndRepliesEnquiries from "./modules/main_dashboard/components/CommentsAndRepliesEnquiries";
import CommentsAndRepliesRequests from "./modules/main_dashboard/components/CommentsAndRepliesRequests";
import AskAnExpertHighlight from "./modules/main_dashboard/components/AskAnExpertHighlight";
import SearchCardsSME from "./modules/main_dashboard/components/SearchCardsSME";
import SearchForAnswer from "./modules/main_dashboard/components/SearchForAnswer/components/SearchForAnswer";
import RequestForReviewLM1 from "./modules/main_dashboard/components/RequestForReviewLM1/components/RequestForReviewLM1";
import Topics from "./modules/main_dashboard/components/Topics/components/Topics";
import Settings from "./modules/main_dashboard/components/Settings/components/Settings";

import MyRequestsEdit from "./modules/main_dashboard/components/MyRequestsEdit/components/MyRequestsEdit";
import PreviewCards from "./modules/main_dashboard/components/PreviewCards/components/PreviewCards";
import AllHubs from "./modules/main_dashboard/components/AllHubs/components/AllHubs";
import AiSettings from "./modules/main_dashboard/components/AiSettings";
import CreateUser from "./modules/main_dashboard/components/CreateUser";
import Error404 from "../src/shared/Error404";
import { useHistory, withRouter, Route } from "react-router-dom";
import { Update } from "@material-ui/icons";
import UpdateDetails from "./modules/main_dashboard/components/UpdateDetails/components/UpdateDetails";
import AccessGroup from "./modules/main_dashboard/components/AccessGroup/components/AccessGroup";
import UserManagement from "./modules/main_dashboard/components/UserManagement/component/UserManagement";
import ChangePassword from "./modules/main_dashboard/components/ChangePassword/components/ChangePassword";
import CreateHub from "./modules/main_dashboard/components/CreateHub/components/CreateHub";

const Routes = withRouter(({ history }) => {
  let histories = useHistory();

  const role =
    histories.location.state === undefined
      ? localStorage.getItem("role")
      : histories.location.state.role;
  return (
    <Switch>
      <RouteWithLayout
        component={role === null ? LoginHome : MainDasboard}
        exact
        layout={MainLayout}
        path="/"
        layoutProps={{ absoluteHeader: false }}
      />

      <RouteWithLayout
        component={role === null ? ForgotPassword : MainDasboard}
        exact
        layout={MainLayout}
        path="/forgot_password"
      />
      <RouteWithLayout
        component={role === null ? SetNewPassword : MainDasboard}
        exact
        layout={MainLayout}
        path="/set_new_password"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : CheckEmail}
        exact
        layout={MainLayout}
        path="/form_confirm"
      />
      {/* Private Routes*/}
      <RouteWithLayout
        component={role === null ? LoginHome : MainDasboard}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AskAnExpert}
        exact
        layout={MainLayout}
        path="/askanexpert"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : MyRequests}
        exact
        layout={MainLayout}
        path="/myRequests"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : CardViewUI}
        exact
        layout={MainLayout}
        path="/card-view-ui"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : MyRequestsEdit}
        exact
        layout={MainLayout}
        path="/myRequestsEdit"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : Requests}
        exact
        layout={MainLayout}
        path="/requests"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AssignSME}
        exact
        layout={MainLayout}
        path="/assignSME"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : Review}
        exact
        layout={MainLayout}
        path="/review"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : Edit_Review}
        exact
        layout={MainLayout}
        path="/edit_review"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : Show_Card}
        exact
        layout={MainLayout}
        path="/show_card_view"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AddAnswer}
        exact
        layout={MainLayout}
        path="/addAnswer"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AddCard}
        exact
        layout={MainLayout}
        path="/create_card"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : SearchCards}
        exact
        layout={MainLayout}
        path="/search"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : PreviewCard}
        exact
        layout={MainLayout}
        path="/preview_card"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : OpenRequest}
        exact
        layout={MainLayout}
        path="/allOpen"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AllRequest}
        exact
        layout={MainLayout}
        path="/allRequest"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : WhatIRaised}
        exact
        layout={MainLayout}
        path="/whatIRaised"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AnaliticsLandingPage}
        exact
        layout={MainLayout}
        path="/analiticsHome"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : RequestForAnswerDashboard}
        exact
        layout={MainLayout}
        path="/rfaDashboard"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : RequestForAnswer}
        exact
        layout={MainLayout}
        path="/requestForAnswer"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : RequestForReview}
        exact
        layout={MainLayout}
        path="/requestForReview"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AccurateComment}
        exact
        layout={MainLayout}
        path="/accurateComment"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : PreviewAnswer}
        exact
        layout={MainLayout}
        path="/previewAnswer"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : RequestForAnswerLM1}
        exact
        layout={MainLayout}
        path="/requestForAnswerLM"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : CreateNewCard}
        exact
        layout={MainLayout}
        path="/CreateNewCard"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : RequestAnReview}
        exact
        layout={MainLayout}
        path="/requestAnReview"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AvailableLinks}
        exact
        layout={MainLayout}
        path="/allLinks"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : CommentsAndRepliesEnquiries}
        exact
        layout={MainLayout}
        path="/commentsAndRepliesEnquiries"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : CommentsAndRepliesRequests}
        exact
        layout={MainLayout}
        path="/commentsAndRepliesRequests"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AskAnExpertHighlight}
        exact
        layout={MainLayout}
        path="/askAnExpertHighlight"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : SearchCardsSME}
        exact
        layout={MainLayout}
        path="/searchCardsSME"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : SearchForAnswer}
        exact
        layout={MainLayout}
        path="/searchForAnswer"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : Topics}
        exact
        layout={MainLayout}
        path="/topics"
      />

      <RouteWithLayout
        component={role === null ? LoginHome : Settings}
        exact
        layout={MainLayout}
        path="/settings"
      />

      <RouteWithLayout
        component={role === null ? LoginHome : RequestForReviewLM1}
        exact
        layout={MainLayout}
        path="/requestForReviewLM1"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : PreviewCards}
        exact
        layout={MainLayout}
        path="/previewCards"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : AllHubs}
        exact
        layout={MainLayout}
        path="/allHubs"
      />
      <RouteWithLayout
        component={role === null ? LoginHome : UpdateDetails}
        exact
        layout={MainLayout}
        path="/updateDetails"
      />

       <RouteWithLayout
        component={role === null ? LoginHome : AiSettings}
        exact
        layout={MainLayout}
        path="/aiSettings"
      />

      <RouteWithLayout
       component={role === null ? LoginHome : CreateUser}
       exact
       layout={MainLayout}
       path="/create_user"
     />
   
       <RouteWithLayout
        component={role === null ? LoginHome : AccessGroup}
        exact
        layout={MainLayout}
        path="/accessGroup"
      />   
      
       <RouteWithLayout
        component={role === null ? LoginHome : UserManagement}
        exact
        layout={MainLayout}
        path="/userManagement"
     />
   
       <RouteWithLayout
        component={role === null ? LoginHome : ChangePassword}
        exact
        layout={MainLayout}
        path="/changePass"
      />   
      
       <RouteWithLayout
        component={role === null ? LoginHome : CreateHub}
        exact
        layout={MainLayout}
        path="/addHub"
      />   


      <Route component={Error404} />
    </Switch>
  );
});

const RouteController = () => {
  return (
    // <Global.AuthProvider>
    <Routes />
    // </Global.AuthProvider>
  );
};

export default RouteController;
