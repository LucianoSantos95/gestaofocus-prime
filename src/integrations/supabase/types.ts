export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      analytics_events: {
        Row: {
          created_at: string | null
          event_category: string | null
          event_label: string | null
          event_name: string
          event_value: number | null
          id: string
          page_path: string | null
          referrer: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_category?: string | null
          event_label?: string | null
          event_name: string
          event_value?: number | null
          id?: string
          page_path?: string | null
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_category?: string | null
          event_label?: string | null
          event_name?: string
          event_value?: number | null
          id?: string
          page_path?: string | null
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      client_projects: {
        Row: {
          client_name: string | null
          cover_image_url: string | null
          created_at: string
          current_sprint: number
          delivery_date: string | null
          description: string | null
          id: string
          progress: number
          project_name: string
          status: string
          total_sprints: number
          updated_at: string
          user_id: string
        }
        Insert: {
          client_name?: string | null
          cover_image_url?: string | null
          created_at?: string
          current_sprint?: number
          delivery_date?: string | null
          description?: string | null
          id?: string
          progress?: number
          project_name: string
          status?: string
          total_sprints?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          client_name?: string | null
          cover_image_url?: string | null
          created_at?: string
          current_sprint?: number
          delivery_date?: string | null
          description?: string | null
          id?: string
          progress?: number
          project_name?: string
          status?: string
          total_sprints?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      consultation_leads: {
        Row: {
          additional_details: string | null
          business_type: string
          created_at: string
          email: string
          full_name: string
          id: string
          investment_range: string
          looking_for: string
          main_objective: string
          phone: string
          start_timeline: string
          uses_notion: string
        }
        Insert: {
          additional_details?: string | null
          business_type: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          investment_range: string
          looking_for: string
          main_objective: string
          phone: string
          start_timeline: string
          uses_notion: string
        }
        Update: {
          additional_details?: string | null
          business_type?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          investment_range?: string
          looking_for?: string
          main_objective?: string
          phone?: string
          start_timeline?: string
          uses_notion?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      diagnosis_leads: {
        Row: {
          challenges: string[]
          created_at: string
          diagnosis_result: Json | null
          email: string
          id: string
          name: string | null
          phone: string | null
          problem_description: string | null
          recommended_product: string | null
          segment: string
          team_size: string
        }
        Insert: {
          challenges?: string[]
          created_at?: string
          diagnosis_result?: Json | null
          email: string
          id?: string
          name?: string | null
          phone?: string | null
          problem_description?: string | null
          recommended_product?: string | null
          segment: string
          team_size: string
        }
        Update: {
          challenges?: string[]
          created_at?: string
          diagnosis_result?: Json | null
          email?: string
          id?: string
          name?: string | null
          phone?: string | null
          problem_description?: string | null
          recommended_product?: string | null
          segment?: string
          team_size?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      project_sprints: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          project_id: string
          sprint_number: number
          start_date: string | null
          status: string
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          project_id: string
          sprint_number: number
          start_date?: string | null
          status?: string
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          project_id?: string
          sprint_number?: number
          start_date?: string | null
          status?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_sprints_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "client_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      prospect_campaigns: {
        Row: {
          calendly_url: string
          created_at: string
          daily_send_limit: number
          email_1_delay_hours: number
          email_2_delay_hours: number
          email_3_delay_hours: number
          icp_description: string
          id: string
          name: string
          search_query: string | null
          sender_email: string
          sender_name: string
          status: string
          tone_of_voice: string
          updated_at: string
          user_id: string
        }
        Insert: {
          calendly_url: string
          created_at?: string
          daily_send_limit?: number
          email_1_delay_hours?: number
          email_2_delay_hours?: number
          email_3_delay_hours?: number
          icp_description: string
          id?: string
          name: string
          search_query?: string | null
          sender_email: string
          sender_name: string
          status?: string
          tone_of_voice?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          calendly_url?: string
          created_at?: string
          daily_send_limit?: number
          email_1_delay_hours?: number
          email_2_delay_hours?: number
          email_3_delay_hours?: number
          icp_description?: string
          id?: string
          name?: string
          search_query?: string | null
          sender_email?: string
          sender_name?: string
          status?: string
          tone_of_voice?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      prospect_leads: {
        Row: {
          campaign_id: string
          company_name: string
          contact_name: string | null
          contact_role: string | null
          created_at: string
          current_sequence_step: number
          email: string | null
          enriched_data: Json | null
          id: string
          industry: string | null
          last_contacted_at: string | null
          location: string | null
          next_action_at: string | null
          notes: string | null
          pain_points: string[] | null
          personalized_hook: string | null
          score: number | null
          source: string
          status: string
          updated_at: string
          website: string | null
        }
        Insert: {
          campaign_id: string
          company_name: string
          contact_name?: string | null
          contact_role?: string | null
          created_at?: string
          current_sequence_step?: number
          email?: string | null
          enriched_data?: Json | null
          id?: string
          industry?: string | null
          last_contacted_at?: string | null
          location?: string | null
          next_action_at?: string | null
          notes?: string | null
          pain_points?: string[] | null
          personalized_hook?: string | null
          score?: number | null
          source?: string
          status?: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          campaign_id?: string
          company_name?: string
          contact_name?: string | null
          contact_role?: string | null
          created_at?: string
          current_sequence_step?: number
          email?: string | null
          enriched_data?: Json | null
          id?: string
          industry?: string | null
          last_contacted_at?: string | null
          location?: string | null
          next_action_at?: string | null
          notes?: string | null
          pain_points?: string[] | null
          personalized_hook?: string | null
          score?: number | null
          source?: string
          status?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prospect_leads_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "prospect_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      prospect_messages: {
        Row: {
          ai_classification: Json | null
          body_html: string | null
          body_text: string | null
          campaign_id: string
          created_at: string
          delivered_at: string | null
          direction: string
          error_message: string | null
          external_id: string | null
          from_email: string | null
          id: string
          lead_id: string
          opened_at: string | null
          replied_at: string | null
          sent_at: string | null
          sequence_step: number | null
          status: string
          subject: string | null
          to_email: string | null
        }
        Insert: {
          ai_classification?: Json | null
          body_html?: string | null
          body_text?: string | null
          campaign_id: string
          created_at?: string
          delivered_at?: string | null
          direction: string
          error_message?: string | null
          external_id?: string | null
          from_email?: string | null
          id?: string
          lead_id: string
          opened_at?: string | null
          replied_at?: string | null
          sent_at?: string | null
          sequence_step?: number | null
          status?: string
          subject?: string | null
          to_email?: string | null
        }
        Update: {
          ai_classification?: Json | null
          body_html?: string | null
          body_text?: string | null
          campaign_id?: string
          created_at?: string
          delivered_at?: string | null
          direction?: string
          error_message?: string | null
          external_id?: string | null
          from_email?: string | null
          id?: string
          lead_id?: string
          opened_at?: string | null
          replied_at?: string | null
          sent_at?: string | null
          sequence_step?: number | null
          status?: string
          subject?: string | null
          to_email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prospect_messages_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "prospect_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prospect_messages_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "prospect_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      prospect_sequence_jobs: {
        Row: {
          attempts: number
          campaign_id: string
          created_at: string
          id: string
          last_error: string | null
          lead_id: string
          processed_at: string | null
          scheduled_for: string
          sequence_step: number
          status: string
        }
        Insert: {
          attempts?: number
          campaign_id: string
          created_at?: string
          id?: string
          last_error?: string | null
          lead_id: string
          processed_at?: string | null
          scheduled_for: string
          sequence_step: number
          status?: string
        }
        Update: {
          attempts?: number
          campaign_id?: string
          created_at?: string
          id?: string
          last_error?: string | null
          lead_id?: string
          processed_at?: string | null
          scheduled_for?: string
          sequence_step?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "prospect_sequence_jobs_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "prospect_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prospect_sequence_jobs_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "prospect_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          interest: string | null
          main_challenge: string | null
          source: string | null
          wants_trial: boolean | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          interest?: string | null
          main_challenge?: string | null
          source?: string | null
          wants_trial?: boolean | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          interest?: string | null
          main_challenge?: string | null
          source?: string | null
          wants_trial?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_bounce_rate: {
        Args: { hours_ago?: number }
        Returns: {
          bounce_rate: number
          bounced_sessions: number
          total_sessions: number
        }[]
      }
      get_analytics_dashboard: {
        Args: { days_ago?: number }
        Returns: {
          event_category: string
          event_count: number
          event_name: string
          time_bucket: string
          unique_sessions: number
        }[]
      }
      get_engagement_metrics: {
        Args: { hours_ago?: number }
        Returns: {
          avg_pages_per_session: number
          avg_session_duration_seconds: number
          engaged_sessions: number
          engagement_rate: number
          total_sessions: number
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "free" | "pro" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["free", "pro", "admin"],
    },
  },
} as const
